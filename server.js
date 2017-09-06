// Begin White Belt Coding Ninja for the Server

// Node Dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser")

// App variable
var app = express();

//Server static content the public directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars Information
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Controllers Information
var router = require('./controllers/burgers_controller.js');
app.use('/', router);

// Open Server
var port = process.env.PORT || 3000;
app.listen(port);