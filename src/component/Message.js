import { Component } from "react";
class Message extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	render() {
		return (
			<h3>
				<span className="badge amber darken-2">{this.props.message}</span>
			</h3>
		)
	}
}

export default Message;
