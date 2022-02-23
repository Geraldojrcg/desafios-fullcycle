const express = require("express");
const mysql = require("mysql");

const app = express();

const connectionConfig = {
  host: "db",
  user: "root",
  password: "root",
  database: "desafiodb",
};

(() => {
  try {
    const connection = mysql.createConnection(connectionConfig);

    const createTableSql =
      "CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key(id))";

    connection.query(createTableSql, (error) => {
      if (error) throw error;

      const createPersonSql =
        'INSERT INTO people (name) VALUES ("Geraldo Jr.")';

      connection.query(createPersonSql, error, (error) => {
        if (error) throw error;
      });
    });
  } catch (error) {
    console.error(error);
  }
})();

app.get("/", (req, res) => {
  res.send("<h1>Full Cycle</h1>");
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App running at: " + port);
});
