var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<p>
				Hello, {this.props.name}!
				It is {this.props.date.toTimeString()}.
			</p>
		);
	}
});
