var express = require('express');
var burger = require('../models/burger.js');
var router      = express.Router();

router.get('/', function (req, res) {
    burger.selectAll()
    .then(function(data){
        var hbsData = {
            burgers: data
        };
        res.render("index", hbsData);
      })
      .catch(function(err){
        res.json(err)
      });
})

router.post('/insert', function (req, res) {
    burger_name = req.body.burger_name;
    burger.insertOne(burger_name)
    .then(function(data){
        res.redirect("/");
        
      })
      .catch(function(err){
        res.json({error:true})
      });
    
  })

router.post('/:id', function (req, res) {
    var burger_id = req.params.id;

    burger.updateOne(1,burger_id)
    .then(function(data){
       res.redirect("/");
      })
      .catch(function(err){
        res.json({error:true})
      });
})

module.exports = router;