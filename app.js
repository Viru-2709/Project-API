var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./connection/Connection')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userRouter = require('./routes/user.routes');
var adminRouter = require('./routes/admin.routes');
var tournamentRouter = require('./routes/tournament.routes');
var teamRouter = require('./routes/team.routes');
var gameRouter = require('./routes/game.routes');
var scoreRouter = require('./routes/score.routes');
var inquiryRouter = require('./routes/inquiry.routes');

var cors = require('cors')
var app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/tournament', tournamentRouter);
app.use('/team', teamRouter);
app.use('/game', gameRouter);
app.use('/score', scoreRouter);
app.use('/inquiry', inquiryRouter);

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
