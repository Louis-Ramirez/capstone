var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var bodyParser = require('body-parser'); 


//manages everything session-related (i.e cookies)
var session = require('express-session')

var User = require('./models/user'); 


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');

//invokves an instance of express application 
var app = express();

//set our application port 
app.set('port', 9000); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//set morgan to log info abt our requests for development use
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);

// initializing body-parser to parse any incoming parameters requests to req.body 
app.use(bodyParser.urlencoded({ extended: true })); 

//initialize cookie-parser to allow us to access the browser's cookies 
app.use(cookieParser()); 

//initialize expression-session to allow us to track the logged-in user across sessions
app.use(session({
  key: 'user_sid', 
  secret: 'somerandomstuffs', 
  resave: false, 
  saveUninitialized: false, 
  cookie: {
    expires: 600000
  }
})); 

/* middleware that checks if user's cookie is still saved in browser & user is not set, 
then user is automatically be loggged out. Usually happens when file isn't running and 
user is already logged in, cookie still remains saved in the browser */ 
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid'); 
  }
  next(); 
})

/* middleware function that checks if user is logged in  */ 
var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
  }
  else {
    next(); 
  }
}; 

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
