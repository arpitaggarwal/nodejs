const express = require('express');
const bodyParser= require('body-parser')
const app = express();

// Express allows us to add middlewares like body-parser to our application with the use method.
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  //__dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
})

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/form.html')
  //__dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
})

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
  console.log(req.body)
})
