var express = require('express');
var app = express();
app.get('/', function (req, res) {
	abc(2,4);
  res.send('Hello World!');
});

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);


function abc(a,b) {
	c = a + b;
	d = c + a;
	e = d + b;
	return e;
}
