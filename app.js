var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var request = require('request');
var proxy = require('http-proxy-middleware');


var mongoose = require('mongoose');
require('./models/Transaction.model.js');

var mongoDB = 'mongodb://127.0.0.1/hf';
mongoose.connect(mongoDB);


mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var indexRouter = require('./routes/index');
var callbackRouter = require('./routes/callback');
var productsRouter = require('./routes/products');
var checkoutRouter = require('./routes/checkout');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/api/products', productsRouter);
app.use('/api/checkout', checkoutRouter);
app.use('/api/completed', callbackRouter);

app.use('/', proxy({target: 'http://localhost:3334/', changeOrigin: true, ws: true,}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
