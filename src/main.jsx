var React = require('react');
var Header = require('./layout/header');
var Body = require('./layout/body');
var HelloWorld = require('./hello/main');

//setInterval(function() {
	React.render(
		<div>
			<Header />
			<Body>
				<HelloWorld />
			</Body>
		</div>,
		document.getElementById('example')
	);
//}, 500);
