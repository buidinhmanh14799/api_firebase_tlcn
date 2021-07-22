var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var usersRouter = require('./routes/userRouter');
var SendCode = require('./routes/sendcodeRouter');
var database = require('./routes/databaseRouter');

var practiceonline = require('./routes/practiceOnline');
var SendMessage = require('./routes/sendMessageRouter');
const {admin} = require('./src/firebase/firebase-confix');

var app = express();

// parse application/json


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/users',requiresLogin, usersRouter);
app.use('/sendcode', SendCode);
app.use('/database',requiresLogin, database);
app.use('/sendmessage',requiresLogin, SendMessage);
app.use('/practiceonline',requiresLogin, practiceonline);

function requiresLogin(req, res, next) {
  console.log('Vao check');
  //var idToken = req.headers.authorization || req.body.token || req.query.token || req.headers['x-access-token']

  if (req.headers.authorization != undefined) {
    var idToken = req.headers.authorization;
    admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
      // console.log('ID Token correctly decoded', decodedIdToken);
      admin.auth().getUser(decodedIdToken.uid).then(async (userRecord) => {
        // req.accepted = decoded;
        next();

      }).catch(error => {
        console.error('Error while getting Firebase User record:', error);
        res.status(403).json({ error: 'Unauthorized' });
      });
    }).catch(error => {
      console.error('Error while verifying Firebase ID token:', error);
      res.status(403).json({
        status: false,
        message: 'token has expired'
      });
    });
  } else {
    res.status(500).json({
      status: false,
      message: 'Unauthorized error'
    });
  }
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
