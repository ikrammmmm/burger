var mysql = require('mysql');

  function databaseconnect()
  {
    var connection = mysql.createConnection({
    host: "us-cdbr-east-04.cleardb.com",
    user: "bc6c5983a04300",
    password: "cf2557be",
    database:"heroku_32db7ec924b81f2"
  });
  connection.connect(function(err) {
    if (err) databaseconnect();
  });

  }
  databaseconnect()
  module.exports = connection;
