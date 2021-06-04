var routes = require('./controllers/burgers_controller.js');
var express = require('express');
var app  =  express()

app.use('/', routes);

app.listen(9000);