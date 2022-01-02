import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import { Component } from "react";
import Cart from "../../component/Cart";
import CartItem from "../../component/CartItem";
import CartResult from "../../component/CartResult";

import * as Message from "../constants/Message"
import {actionRemoveProductInCart ,actionChangeMes,actionUpdateProductInCart} from '../actions/index'

class CartContainer extends Component { 

	showCartItem = (cart) => {
		var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>
		if(cart.length > 0 ){
			result = cart.map((item,index)=>{
				return 	<CartItem 
							key={index} item={item} index={index}
							onDeleteProductInCart = {this.props.onDeleteProductInCart}
							onChangeMes={this.props.onChangeMes}
							onUpdateProductInCart = { this.props.onUpdateProductInCart}
						/>
			})
		}
		return result
	}
	showCartResult = (cart) => {
		var result = null
		if(cart.length > 0 ){
			result = <CartResult cart={cart} />
		}
		return result
	}

	render() {
		var {cart} = this.props
		return (
			<Cart>
				{this.showCartItem(cart)}
				{this.showCartResult(cart)}
			</Cart>
		)
	}
}

// dùng propTypes để kiểm tra g/trị lấy từ store-redux có phải kiểu dữ liệu đúng yêu cầu ko
CartContainer.propTypes = {
	cart : PropTypes.arrayOf(		// kiểm tra [] dùng arrayOf
		PropTypes.shape({			// kiểm tra {} dùng shape({})
			product : PropTypes.shape({
				id : PropTypes.number.isRequired ,
				name : PropTypes.string.isRequired ,
				image : PropTypes.string.isRequired ,
				description : PropTypes.string.isRequired ,
				price : PropTypes.number.isRequired ,
				imventory : PropTypes.number.isRequired ,
				rating : PropTypes.number.isRequired ,
			}).isRequired,
			quantity : PropTypes.number.isRequired
		})
	).isRequired ,

	onDeleteProductInCart : PropTypes.func.isRequired ,
	onChangeMes : PropTypes.func.isRequired ,
	onUpdateProductInCart : PropTypes.func.isRequired ,

}

const mapStateToProps = (state) => {	// liên kết vs reducers/index.js
	return {
		cart : state.cart
	}
}

const mapDispatchToProps = (dispatch,props) => {
	return {
		onDeleteProductInCart : (product) => {
			dispatch(actionRemoveProductInCart(product))
		},
		onChangeMes : (message) =>{
			dispatch(actionChangeMes(message))
		},
		onUpdateProductInCart : (product,quantity) =>{
			dispatch(actionUpdateProductInCart(product,quantity))
		},
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
