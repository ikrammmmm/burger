var routes = require('./controllers/burgers_controller.js');
var express = require('express');
const hbs = require('express-handlebars');
var app  =  express()
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.engine("handlebars", hbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use('/', routes);
app.use(express.static(process.cwd() + "/public"));


var appPort = process.env.PORT || 5000;


app.listen(appPort, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});