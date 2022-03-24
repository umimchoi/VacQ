const mysql = require("mysql");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "doomdada",
  database: "vacCenter",
});

module.exports = connection;
