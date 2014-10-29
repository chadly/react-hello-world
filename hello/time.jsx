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
	},
	componentWillUnmount: function() {
		if(this.interval) {
			clearInterval(this.interval);
		}
	},
	render: function() {
		return (
			<span>It is {this.state.time.format('h:mm:ss a')}.</span>
		);
	}
});
