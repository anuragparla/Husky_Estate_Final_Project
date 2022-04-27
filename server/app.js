require("dotenv").config()

var express = require('express');
var app = express();
var db = require('./db');

global.__root   = __dirname + '/'; 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

var UserController = require('./routes/user');
app.use('/api/users', UserController);

var AuthController = require('./routes/auth');
app.use('/api/auth', AuthController);


var PropertyController = require('./routes/property');
app.use('/api/property', PropertyController);


module.exports = app;