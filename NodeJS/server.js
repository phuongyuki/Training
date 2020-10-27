var http = require('http');
var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
var app = express();

app.use(express.json());
app.use(express.static("express"));
app.use(express.static(path.join(__dirname,'/public')))

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

app.get('/index.html', function(req,res){
    res.render('index.njk')
});

app.get('/category.html', function(req, res){
  res.render('category.njk')
})

app.get('/contact.html', function(req, res){
  res.render('contact.njk')
})

app.get('/login.html', function(req, res){
  res.render('login.njk')
})

app.get('/register.html', function(req, res){
  res.render('register.njk')
})

app.get('/sedan.html', function(req, res){
  res.render('sedan.njk')
})

var server = http.createServer(app);
var port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);