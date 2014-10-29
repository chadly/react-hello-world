var React = require('react');
var Message = require('./message');
var Input = require('./input');
var Time = require('./time');

module.exports = React.createClass({
	getInitialState: function() {
		return { name: "" };
	},
	onNameChange: function(newName) {
		this.setState({ name: newName });
	},
	render: function() {
		return (
			<div>
				<Input name={this.state.name} onNameChange={this.onNameChange} />
				<p>
					<Message name={this.state.name} />&nbsp;
					<Time />
				</p>
			</div>
		);
	}
});
