var mysql = require('mysql');
var connection = mysql.createConnection({
  HOST: "us-cdbr-east-04.cleardb.com",
  USER: "bc6c5983a04300",
  PASSWORD: "cf2557be",
  DB:"heroku_32db7ec924b81f2"
  });
  connection.connect(function(err) {
    if (err) throw err;
  });
  module.exports = connection;
