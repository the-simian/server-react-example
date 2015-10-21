'use strict';

var React = require('react');

// This is written in plain old, js React, no jsx


function render() {

  var inputOptions = {
    type: 'text',
    defaultValue: 'Edit me!'
  };

  return React.DOM.div({}, React.DOM.input(inputOptions), 'Seconds Elapsed: ', this.state.secondsElapsed);
}

function componentWillUnmount() {
  clearInterval(this.interval);
}

function componentDidMount() {
  this.interval = setInterval(this.tick, 1000);
}

function tick() {
  var tickOptions = {
    secondsElapsed: this.state.secondsElapsed + 1
  };
  this.setState(tickOptions);
}

function getInitialState() {
  return {
    secondsElapsed: 0
  };
}

var Timer = {
  getInitialState: getInitialState,
  tick: tick,
  componentDidMount: componentDidMount,
  componentWillUnmount: componentWillUnmount,
  render: render
};

module.exports = React.createClass(Timer);