 dbCon = require('./connection.js');
const ORM = function(table){
  this.table = table;

  this.selectAll = function(){
    const sql = `SELECT * FROM ??`;

    return new Promise(function(resolve, reject){
        dbCon.query(sql, table, function(error, data) {
            if (error) reject(error);
            resolve(data);
        });
    })
  },

  this.insertOne = function(burger_name){
    const sql = `INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)`;

    return new Promise(function(resolve, reject){
        dbCon.query(sql, [table, burger_name,0], function(error, data) {
            if (error) reject(error);
            resolve(data);
        });
    })
  },

  this.updateOne = function(devoured, id){
    const sql = `UPDATE ?? SET devoured = ? WHERE id = ?`;

    return new Promise(function(resolve, reject){
        dbCon.query(sql, [table, devoured, id], function(error, data) {
            if (error) reject(error);
            resolve(data);
        });
    })
  }


}

module.exports = ORM;