'use strict';
//this is currently based heavily on Pete Hunt's example.
// BUT NOT FOR LONG.

var Hapi = require('hapi');
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

var server = new Hapi.Server();
server.connection({
  port: port
});


function indexHtml(req, reply) {
  // You could use JSX here; doesn't matter.
  function createMarkup(markup) {
    var stupidDoctoredStringReplacedHtml = TEMPLATE.replace(PLACEHOLDER, markup);
    return stupidDoctoredStringReplacedHtml;
  }

  var timerStuff = ReactDOMServer.renderToString(Timer());
  var indexPage = createMarkup(timerStuff);

  reply(indexPage);
}


function bundle(req, reply) {
  reply(BUNDLE);
}

server.route({
  method: 'GET',
  path: '/',
  handler: indexHtml
});

server.route({
  method: 'GET',
  path: '/index.html',
  handler: indexHtml
});

server.route({
  method: 'GET',
  path: '/browser-bundle.js',
  handler: bundle
});

server.start(function () {
  console.log('Server running at: ', server.info.uri);
});
