var http = require('http');
var express = require('express');
var nunjucks = require('nunjucks');
//Import the mongoose module
var mongoose = require('mongodb').MongoClient;
var path = require('path');
// const bodyParser = require('body-parser');
var app = express();

app.use(express.json());
app.use(express.static("express"));
app.use(express.static(path.join(__dirname,'/public')))
// app.use(bodyParser.urlencoded({extended: true}))

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

var connectionString = 'mongodb+srv://todayuki:phuong2k11@web-demo-db.rhvu8.mongodb.net/web-demo-db?retryWrites=true&w=majority'

//Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(connectionString,{useUnifiedTopology: true
  })
  .then(client => {
    console.log('Connect to Database')
    const db = client.db('web-demo-db')
    const quotesCollection = db.collection('quotes')
    app.post('/register.html', (req, res)=>{
      quotesCollection.insertOne(req.body)
      .then (result =>{
        res.redirect('/')
      })
      .catch(error => console.error(error))
    })
  })
  .catch(error => console.error(error))


