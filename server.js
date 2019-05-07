const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/getCookie', function(req, res) {
  res.cookie('hello', 'world', {maxAge: 900000, httpOnly: false});
  return res.status(200).send('Cookie sent');
});

app.listen(8080);