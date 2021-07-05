const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('express-handlebars');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const contactRouter = require('./routes/contact');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Configuro el motor de vistas
app.engine('hbs', hbs ({
  extname: '.hbs',
  layoutsDir: 'views/layout',
  defaultLayout: 'layout',
  partialsDir: 'views/partials'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* use: cuando vaya a esa ruta, usara la logica que esta en Router */
app.use('/', indexRouter); // Lo usa si esta en '/'
app.use('/users', usersRouter); // Lo usa si esta en '/users'
app.use('/contact', contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.messqwerage;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
