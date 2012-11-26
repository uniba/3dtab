var express = require("express");

var app = express();

var fs = require('fs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  var src = fs.readFileSync(__dirname + '/views/index.html');  
  res.contentType('html');
  res.send(src);
});

app.listen(3000);