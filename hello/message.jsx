var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<span>Hello, {this.props.name}!</span>
		);
	}
});
