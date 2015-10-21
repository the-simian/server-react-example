/** @jsx React.DOM */
'use strict';

// Simulate long JS load time
setTimeout(function() {
  var React = require('react');
  var ReactDOM = require('react-dom');
  var Timer = require('./Timer');

  ReactDOM.render(<Timer />, document.getElementById('react-root'));
  
  
}, 4000);
