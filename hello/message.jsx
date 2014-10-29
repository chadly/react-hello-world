var React = require('react');

module.exports = React.createClass({
	render: function() {
		if (this.props.name) {
			return <span>Hello, {this.props.name}!</span>
		}

		return <span>Why you have no name?</span>
	}
});
