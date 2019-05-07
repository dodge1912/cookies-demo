const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// app.use(express.static('public'));

app.use(cookieParser());

app.listen(8080);