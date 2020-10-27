var http = require('http');
var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
var app = express();
const pageController = require('./router/router')
const db = require('./router/db')

app.use(express.json());
app.use(express.static("express"));
app.use(express.static(path.join(__dirname,'/public')))
app.use(express.static('./router/db.js'))

nunjucks.configure(('express'),{
  express:app,
  autoscape:true,
  noCache:false,
  watch:true
});

// default URL for website
app.get('/', function(req,res){
    res.render(path.join(__dirname+'/express/index.njk'))
    //__dirname : It will resolve to your project folder.
  });

app.use('/', pageController)
app.use('/', db)

var server = http.createServer(app);
var port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);