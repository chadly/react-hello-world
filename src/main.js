/** @jsx React.DOM */

var React = require('react');
var Header = require('./header');
var Body = require('./body');
var Times = require('./times');

setInterval(function() {
    React.renderComponent(
        <div>
        <Header />
      <Body />
      <Times date={new Date()} />
      </div>,
      document.getElementById('example')
    );
}, 500);
