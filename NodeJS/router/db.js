var express = require('express');
var mongoose = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}))

var connectionString = 'mongodb+srv://todayuki:phuong2k11@web-demo-db.rhvu8.mongodb.net/<web-demo-db>?retryWrites=true&w=majority'

//Set up default mongoose connection
mongoose.connect(connectionString,{useUnifiedTopology: true
  })
  .then(client => {
    console.log('Connect to Database')
    const db = client.db('web-demo-db')
    const quotesCollect = db.collection('quotes')
    

    app.post('/data', (req,res)=>{
      quotesCollect.insertOne(req.body)
      res.redirect('/register.html')
    })


    app.get('/data', (req, res) => {
      db.collection('quotes').find().toArray()
      // var users = db.collection('quotes').find({},{ projection: {_id: 0}
      // }).toArray()
        .then(result => {
          console.log(result)
          // res.render('/data.njk', users)
        })
        .catch(error => console.error(error))
    })
  })
  .catch(error => console.error(error))

module.exports = app;