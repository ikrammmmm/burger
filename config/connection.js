var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database:"burgers_db"
  });
  connection.connect(function(err) {
    if (err) throw err;
  });
  module.exports = connection;
