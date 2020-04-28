const express = require('express');
require('express-async-errors');
const { createElement } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const IndexPage = require('./pages/IndexPage');

const app = express();
app.get('/', (req, res) => {
  res.send(renderToStaticMarkup(createElement(IndexPage)));
});

module.exports = app;
