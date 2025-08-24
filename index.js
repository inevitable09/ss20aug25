const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
	host : "sql12.freesqldatabase.com",
	user : "sql12795947",
	password : "BbVuid9Rhx",
	database : "sql12795947",
	port : 3306
});

app.post("/save", (req, res) => {
    let sql = "INSERT INTO student (name, company, salary) VALUES (?, ?, ?)";
    let data = [req.body.name, req.body.company, req.body.salary];

    con.query(sql, data, (error, result) => {
        if (error) {
            console.error("DB Error:", error);  // log in Render logs
            return res.status(500).send(error);
        } else {
            console.log("Insert OK:", result);
            return res.send({ success: true, result });
        }
    });
});
