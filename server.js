const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(express.static('public'));

app.use(function(req, res, next) {
  res.cookie('hello', 'world', {maxAge: 900000, httpOnly: false});

  if (req.cookies) {
    console.log(req.cookies); // print cookies received from client
  }
  
  next();
});

app.get('*',function (req, res) {
  res.redirect('/');
});

app.get('/', function(req, res) {
  return res.status(200);
});

app.listen(8080);