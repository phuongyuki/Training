var http = require('http');
var express = require('express');
var path = require('path');
var app = express();
app.use(express.json());
app.use(express.static("express"));
app.use(express.static(path.join(__dirname,'/public')))
// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });
var server = http.createServer(app);
var port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);