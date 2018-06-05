var express = require('express');
var apiRouter = express.Router();

var searchRouter = require('./search.js');
var articleRouter = require('./article.js');

// Test API call
apiRouter.get('/test', (req, res) => {
  res.send({ express: 'Express backend connected!' });
});

// Add all other routers
apiRouter.use('/search', searchRouter);
apiRouter.use('/article', articleRouter);

// catch 404 and forward to error handler
apiRouter.use(function(req, res, next) {
  next(createError(404));
});

// error handler
apiRouter.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err)
  return res.json({ status: err.status || 500, message: 'Error!' })
});

module.exports = apiRouter;
