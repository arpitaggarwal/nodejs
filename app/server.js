const express = require('express');
const bodyParser= require('body-parser')
const app = express();

const MongoClient = require('mongodb').MongoClient

var db

app.set('view engine', 'ejs')

// Express allows us to add middlewares like body-parser to our application with the use method.
app.use(bodyParser.urlencoded({extended: true}))


//app.get('/', (req, res) => {
  //var cursor = db.collection('quotes').find()
//  db.collection('quotes').find().toArray(function(err, results) {
//  console.log(results)
//  })


//  res.sendFile(__dirname + '/index.html')
  //__dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
//})


app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})


app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/form.html')
  //__dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
})

MongoClient.connect('mongodb://arpit:arpit@ds047752.mlab.com:47752/my-database', (err, database) => {

  if (err) return console.log(err)
  db = database

  app.listen(3000, function() {
    console.log('listening on 3000')
  })
})



app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
     if (err) return console.log(err)

     console.log('saved to database')
     res.redirect('/')
   })
})
