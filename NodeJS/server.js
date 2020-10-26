var http = require('http');
var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
var app = express();

app.set('views', __dirname + '/express');
app.engine('html', require('ejs').renderFile);

app.use(express.json());
app.use(express.static("express"));
app.use(express.static(path.join(__dirname,'/public')))

nunjucks.configure(path.resolve(__dirname,'express'),{
  express:app,
  autoscape:true,
  noCache:false,
  watch:true
});

app.get('/', function(req, res){
  res.render('header.html')
})

// default URL for website
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'))
    //__dirname : It will resolve to your project folder.
  });

app.get('/index.html', function(req,res){
    res.render('index.html')
});

var server = http.createServer(app);
var port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);