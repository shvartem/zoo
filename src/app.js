const express = require('express');
const logger = require('morgan');
const path = require('path');
const hbs = require('hbs');
const indexRouter = require('./routes/index.router');
const getAllCategories = require('./middlewares/getAllCategories.middleware');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'src', 'views'));

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
hbs.registerPartials(path.join(process.env.PWD, 'src/views/partials'));

app.use(getAllCategories);

app.use('/', indexRouter);

module.exports = app;
