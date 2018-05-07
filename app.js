var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

var mysql = require('./mysql');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/user', userRouter);

// setup routes
var addPaymentRouter = require('./routes/addPayment');
var addTripRouter = require('./routes/addTrip');
var logoutRouter = require('./routes/logout');
var loginRouter = require('./routes/login');
var addUserRouter = require('./routes/addUser');
var addReviewRouter = require('./routes/addReview');
var getUserTripsRouter = require('./routes/getUserTrips');
var adminRouter = require('./routes/admin');
var getReviewsRouter = require('./routes/getReviews');

app.use('/addPayment', addPaymentRouter);
app.use('/addTrip', addTripRouter);
app.use('/logout', logoutRouter);
app.use('/addUser', addUserRouter);
app.use('/login', loginRouter);
app.use('/addReview', addReviewRouter);
app.use('/getUserTrips', getUserTripsRouter);
app.use('/admin', adminRouter);
app.use('/getReviews', getReviewsRouter);


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

app.listen(80, () => console.log('Travel Agency listening on port 80!'))

module.exports = app;
