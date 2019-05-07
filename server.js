const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(express.static('public'));

app.use(function(req, res, next) {
  res.cookie('hello', 'world', {maxAge: 900000, httpOnly: false});
  next();
});

app.get('*',function (req, res) {
  res.redirect('/');
});

app.get('/', function(req, res) {
  return res.status(200).send('Cookie sent');
});

app.listen(8080);