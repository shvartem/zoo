const express = require('express');
const logger = require('morgan');
const path = require('path');
const hbs = require('hbs');

const getAllCategories = require('./middlewares/getAllCategories.middleware');

const indexRouter = require('./routes/index.router');
const adminsRouter = require('./routes/admins.router');
const categoriesRouter = require('./routes/categories.router');
const tariffsRouter = require('./routes/tariffs.router');
const newsRouter = require('./routes/news.router');

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
app.use('/admins', adminsRouter);
app.use('/categories', categoriesRouter);
app.use('/tariffs', tariffsRouter);
app.use('/news', newsRouter);

module.exports = app;
