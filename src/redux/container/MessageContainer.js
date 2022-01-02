import { Component } from "react";
import Message from "../../component/Message";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class MessageContainer extends Component {
	render() {
		var { message } = this.props
		return (
			<Message message={message} />
		)
	}
}

MessageContainer.propTypes = {
	message : PropTypes.string.isRequired
}

const mapStateToProps = (state) => {		// liên kết vs reducers/index.js
	return {
		message : state.message
	}
}



export default connect(mapStateToProps,null)(MessageContainer);
