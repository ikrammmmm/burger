var express = require('express');
var burger = require('../models/burger.js');
var router      = express.Router();

router.get('/', function (req, res) {
    res.send('home page')
})

router.post('/insert', function (req, res) {
    res.send('insert request')
  })

router.post('/update', function (req, res) {
    res.send('update request')
})

module.exports = router;