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
var storedList = challenges.slice(4);

app.get('/challenges', function(req, res) {
  if (req.query.next) {
    var heldList = storedList.splice(0,2);
    res.json(heldList);
  } else {
    var list = challenges.slice(0,4);
    res.json(list);
  // var list = [];
  // for (var i = 0; i < 4; i++) {
  //   list.push(challenges[i]);
  // }
  }
})
// Dynamic Routes


var port = 3000;
app.listen(port, function(){
  console.log("listening on port " + port);
});
