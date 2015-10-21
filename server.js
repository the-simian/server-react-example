'use strict';
//this is currently based heavily on Pete Hunt's example.
// BUT NOT FOR LONG.

var express = require('express');
var fs = require('fs');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Timer = React.createFactory(require('./Timer'));
var PLACEHOLDER = 'If you see this then the React Stuff™ did not get rendered.';
var BUNDLE = fs.readFileSync('./browser-bundle.js', {
  encoding: 'utf8'
});
var TEMPLATE = fs.readFileSync('./index.html', {
  encoding: 'utf8'
});

var port = 4000;

var app = express();

function indexHtml(req, res) {
  // You could use JSX here; doesn't matter.
  function createMarkup(markup) {
    var stupidDoctoredStringReplacedHtml = TEMPLATE.replace(PLACEHOLDER, markup);
    return stupidDoctoredStringReplacedHtml;
  }

  var timerStuff = ReactDOMServer.renderToString(Timer());
  var indexPage = createMarkup(timerStuff);

  res.send(indexPage);
}


function bundle(req, res) {
  res.send(BUNDLE);
}

app
  .get('/', indexHtml)
  .get('/index.html', indexHtml)
  .get('/browser-bundle.js', bundle);

console.log('listening on port: ', port);
app.listen(4000);