var express = require('express');
var apiRouter = express.Router();

var searchRouter = require('./search.js');

// Test API call
apiRouter.get('/test', (req, res) => {
  res.send({ express: 'Express backend connected!' });
});

apiRouter.use('/search', searchRouter);

module.exports = apiRouter;
