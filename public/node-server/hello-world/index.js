var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
