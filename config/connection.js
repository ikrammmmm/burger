var mysql = require('mysql');
var connection = mysql.createPool({
  host: "us-cdbr-east-04.cleardb.com",
  user: "bc6c5983a04300",
  password: "cf2557be",
  database:"heroku_32db7ec924b81f2"
  });
  /*connection.connect(function(err) {
    if (err) throw err;
  });*/
  module.exports = connection;
