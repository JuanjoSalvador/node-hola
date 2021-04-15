var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('<h1>hola clase</h1>');
});

app.listen(process.env.PORT || 3000);

module.exports = app;
