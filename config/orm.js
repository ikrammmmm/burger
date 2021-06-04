 dbCon = require('./connection.js');

module.exports = {
    selectAll: function(callback) {
        dbCon.query("SELECT * FROM burgers", callback)
    },
  
    insertOne: function( burger_name, callback) {
        dbCon.query(
        `INSERT INTO burgers SET 
        burger_name = '${burger_name}', 
        devoured = 0`,
        callback
      )
    },
  
    updateOne: function(devoured, id, callback) {
        dbCon.query(
        `UPDATE burgers SET 
        devoured = '${devoured}' 
        WHERE id = ${id}`,
        callback
      )
    },

  }