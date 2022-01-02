import { Component } from "react";
import {connect} from 'react-redux'
import Products from '../../component/Products'
import Product from "../../component/Product";
import {actionAddToCart, actionChangeMes} from '../actions/index'

import PropTypes from 'prop-types'

class ProductsContainer extends Component {
	showProducts = (products) => {
		var result = null
		var {onAddToCart,onChangeMes} = this.props
		if(products.length > 0 ){
			result = products.map((product,index)=>{
				return <Product 
							key={index} product={product}
							onAddToCart = {onAddToCart}
							onChangeMes = {onChangeMes}
						/>
			})
		}
		return result
	}
	render() {
		var {products} = this.props
		return (
			<Products>
				{this.showProducts(products)}
			</Products>
		)
	}
}

// dùng propTypes để kiểm tra g/trị lấy từ store-redux có phải kiểu dữ liệu đúng yêu cầu ko
ProductsContainer.propTypes = {
	products : PropTypes.arrayOf(
		PropTypes.shape({
			id : PropTypes.number.isRequired ,
			name : PropTypes.string.isRequired ,
			image : PropTypes.string.isRequired ,
			description : PropTypes.string.isRequired ,
			price : PropTypes.number.isRequired ,
			imventory : PropTypes.number.isRequired ,
			rating : PropTypes.number.isRequired ,
		})
	).isRequired,

	onAddToCart : PropTypes.func.isRequired ,
	onChangeMes : PropTypes.func.isRequired ,
}

const mapStateToProps = (state) => {		// liên kết vs reducers/index.js
	return {
		products : state.products
	}
}

const mapDispatchToProps = (dispatch,props) => {
	return {
		onAddToCart : (product) => {
			dispatch(actionAddToCart(product,1))
		},
		onChangeMes : (message) =>{
			dispatch(actionChangeMes(message))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
