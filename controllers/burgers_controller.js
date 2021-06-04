var express = require('express');
var burger = require('../models/burger.js');
var router      = express.Router();

router.get('/', function (req, res) {
    burger.selectAll()
    .then(function(data){
        
        res.json({data})
      })
      .catch(function(err){
        res.json({error:true})
      });
})

router.post('/insert', function (req, res) {
    burger_name = req.query.burger_name;
    burger.insertOne(burger_name)
    .then(function(data){
        if(data.insertId)
        {
            res.json({error:false})
        }
        else res.json({error:false})
        
      })
      .catch(function(err){
        res.json({error:true})
      });
    
  })

router.post('/devoure', function (req, res) {
    burger_id = req.query.burger_id;
    burger.updateOne(1,burger_id)
    .then(function(data){
        if(data.affectedRows)
        {
            res.json({error:false})
        }
        else res.json({error:false})
        
      })
      .catch(function(err){
        res.json({error:true})
      });
})

module.exports = router;