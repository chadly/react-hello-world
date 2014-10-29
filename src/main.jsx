var React = require('react');
var Header = require('./layout/header');
var Body = require('./layout/body');
var HelloWorld = require('./hello/main');

React.render(
	<div>
		<Header />
		<Body>
			<HelloWorld />
		</Body>
	</div>,
	document.getElementById('example')
);
