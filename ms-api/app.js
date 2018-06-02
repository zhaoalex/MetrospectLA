const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const routes = require('./routes')

const app = express();

app.set('port', process.env.PORT || 5000)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Priority serve any static files (in production only).
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../ms-web/build')));
}

// Handle API requests.
app.use('/api', routes.apiRouter);

// Remaining requests return the React app, so it can handle routing.
// (also production only)
if (process.env.NODE_ENV === "production") {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../ms-web', 'index.js'));
  });
}

module.exports = app;
