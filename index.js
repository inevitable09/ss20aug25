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
	let sql = "insert into student values(?, ?, ?)";
	let data = [req.body.name, req.body.company, req.body.salary];
	con.query(sql, data, (error, result) => {
		if (error)
			res.send(error);
		else
			res.send(result);
	});
});
app.listen(9000, () => {console.log("ready to serve @ 9000"); })