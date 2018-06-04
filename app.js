let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let tchatRouter = require('./routes/tchat');

// socket.io : require

let socketIO = require('socket.io')();

// Création de l'application express
let app = express();

// on attache notre variable "socketIo à "app" pour l'utiliser dans "/bin/www"
app.socketIO = socketIO;
// on initialise le tchat
let tchat = require ('./util/socket').tchat(socketIO);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Rendre au navigateur les fichiers statiques: css/js/img/fonts...
app.use(express.static(path.join(__dirname, 'public')));
app.use('/dist',
    express.static(path.join(__dirname, 'node_modules/socket.io-client/dist')));
    
app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tchat', tchatRouter);

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
