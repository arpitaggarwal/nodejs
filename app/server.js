const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  //__dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
})

app.listen(3000, function() {
  console.log('listening on 3000')
})
