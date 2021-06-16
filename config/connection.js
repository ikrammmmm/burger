var mysql = require('mysql');
var db_config = {
  host: "us-cdbr-east-04.cleardb.com",
  user: "bc6c5983a04300",
  password: "cf2557be",
  database:"heroku_32db7ec924b81f2"
};
var connection;
function connectDatabase()
{
  var connection = mysql.createConnection(db_config);
  connection.connect(function(err) {
   
    if (err) {
      console.log("error:", err)
      console.log("reconnecting")
      connectDatabase();
    }
  });
}
connectDatabase()
module.exports = connection;
