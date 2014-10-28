/** @jsx React.DOM */

var React = require('react');
var Header = require('./header');
var Body = require('./body');

React.renderComponent(
    <div>
    <Header />
  <Body />
  </div>,
  document.getElementById('example')
);
