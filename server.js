var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

// middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Static Routes
// GET '/' => '/public/index.html'
app.use(express.static(__dirname + '/public'));

// Data
var challenges = require('./lib/challenges');
// GET '/challenges' =>
// Dynamic Routes


var port = 3000;
app.listen(port, function(){
  console.log("listening on port " + port);
});
