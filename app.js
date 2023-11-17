var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport');//lab13
var LocalStrategy = require('passport-local').Strategy;
// passport config
// Use the existing connection
// The Account model
var Account = require('./models/Account');//lab13
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  })
  })
  )//lab13
  
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, {useNewUrlParser: true,
  useUnifiedTopology: true
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bankRouter = require('./routes/bank');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourcesRouter = require('./routes/resources');


var bank = require("./models/bank");
//const schema = require('./routes/bank');
//const bank = require('./models/bank');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({// lab13
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
app.use(passport.initialize());
app.use(passport.session());//lab13
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/bank', bankRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/users', usersRouter);
app.use('/resources', resourcesRouter);
//app.use('/bank',schemaCostume);

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await bank.deleteMany();
  let instance1 = new bank({bank_name:"sbi", bank_account:"s4566", bank_balance:1234});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
  let instance2 = new bank({ bank_name:"canar", bank_account:"v4566", bank_balance:234});
  instance2.save().then(doc=>{
  console.log("second object saved")}
  ).catch(err=>{
  console.error(err)
  });
  let instance3 = new bank({ bank_name:"sbbi", bank_account:"b4566", bank_balance:123});
  instance3.save().then(doc=>{
  console.log("third object saved")}
  ).catch(err=>{
  console.error(err)
  });
  }
  let reseed = true;
  if (reseed) {
     recreateDB();
}
 /* let reseed = true;
  if (reseed) {recreateDB();
  /*/
  
    
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