var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return { time: new Date() };
	},
	componentDidMount: function() {
		this.interval = setInterval(function() {
			this.setState({ time: new Date()});
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
			<p>It is {this.state.time.toTimeString()}.</p>
		);
	}
});
