var mysql = require('mysql');
require("dotenv").config()

var db_config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database:process.env.DB_DATABSE
};
var connection = mysql.createConnection(db_config);
  connection.connect(function(err) {
    if (err) throw err;
  });
  module.exports = connection;
