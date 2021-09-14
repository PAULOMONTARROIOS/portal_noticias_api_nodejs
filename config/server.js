var express = require('express');
var app = express();
var consign = require('consign');
var bodyparser = require('body-parser');
var expressValidator = require('express-validator');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(expressValidator());

// olha para todas as rotas e joga para dentro do contexto do APP
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;