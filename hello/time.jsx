var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
	getInitialState: function() {
		return { time: moment() };
	},
	componentDidMount: function() {
		this.interval = setInterval(function() {
			this.setState({ time: moment() });
		}.bind(this), 500);
		console.log("setting");
	},
	componentWillUnmount: function() {
		if(this.interval) {
			clearInterval(this.interval);
			console.log("clearing");
		}
	},
	render: function() {
		return (
			<p>It is {this.state.time.format('h:mm:ss a')}.</p>
		);
	}
});
