const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(express.static('public'));

app.get('/getCookie', function(req, res) {
  res.cookie('hello', 'world', {maxAge: 900000, httpOnly: false});
  return res.status(200).send('Cookie sent');
});

app.listen(8080);