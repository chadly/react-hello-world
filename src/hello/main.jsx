var React = require('react');
var Message = require('./message');
var Input = require('./input');

module.exports = React.createClass({
	getInitialState: function() {
		return { name: "Homer Simpson" };
	},
	onNameChange: function(newName) {
		this.setState({ name: newName });
	},
	render: function() {
		return (
			<div>
				<Input name={this.state.name} onNameChange={this.onNameChange} />
				<Message name={this.state.name} date={new Date()} />
			</div>
		);
	}
});
