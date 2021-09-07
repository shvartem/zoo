const express = require('express');
const logger = require('morgan');
const path = require('path');

const indexRouter = require('./routes/index.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'src', 'views'));

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', indexRouter);

module.exports = app;
