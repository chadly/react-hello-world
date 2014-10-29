var React = require('react');

module.exports = React.createClass({
	onNameChange: function(ev) {
		if (this.props.onNameChange) {
			this.props.onNameChange(ev.target.value);
		}
	},
	render: function() {
		return (
			<p>
				<label>
					Enter your name:
					<input type="text" placeholder="Your name here" value={this.props.name} onChange={this.onNameChange} />
				</label>
			</p>
		);
	}
});
