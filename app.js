var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var alumnosRouter = require('./routes/alumnos')
var docentesRouter = require('./routes/docentes')
var padresRouter = require('./routes/padres')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'asdgsdo',
  resave: false,
  saveUninitialized: true
}));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get("/", function (req, res) {
	var usuario = Boolean(req.session.personal);

	res.render("", {
		title: "Selecciona tu tipo de usuario",
		usuario: usuario,
		personal: req.session.personal
	});
});

app.use('/users', usersRouter);

app.use('/padres', padresRouter);
app.use('/alumnos', alumnosRouter);
app.use('/docentes', docentesRouter);

app.get('/salir', function (req, res) {
	req.session.destroy();
	res.redirect('/');
});

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
