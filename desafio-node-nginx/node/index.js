const express = require("express");
const mysql = require("mysql");

const app = express();

const connectionConfig = {
  host: "db",
  user: "root",
  password: "root",
  database: "desafiodb",
};

const connection = mysql.createConnection(connectionConfig);

const createTableSql =
  "CREATE TABLE people (id int not null auto_increment, name varchar(255), primary key(id))";

connection.query(createTableSql, (error) => {
  if (error) return;

  const createPersonSql = 'INSERT INTO people (name) VALUES ("Geraldo Jr.")';

  connection.query(createPersonSql, error, (results) => {
    if (error) return;
    console.log(results);
  });
});

app.get("/", (req, res) => {
  res.send("<h1>Full Cycle</h1>");
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App running at: " + port);
});
