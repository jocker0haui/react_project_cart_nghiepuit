import { Component } from "react";
import Header from "./component/Header"
// import Products from "./component/Products"
import ProductsContainer from "./redux/container/ProductsContainer"
// import Message from "./component/Message"
import MessageContainer from "./redux/container/MessageContainer"
// import Cart from "./component/Cart"
import CartContainer from "./redux/container/CartContainer"
import Footer from "./component/Footer"
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	render() {
		return (
			<div className="app">
				{/* <!-- Header --> */}
					<Header/>
				{/* <!-- Header --> */}
				
				{/* main */}
				<main id="mainContainer">
					<div className="container">
						{/* Products */}
							{/* <Products/> */}
							<ProductsContainer/>
						{/* Products */}

						{/* Message */}
							{/* <Message/> */}
							<MessageContainer/>
						{/* Message */}

						{/* Cart */}
							{/* <Cart/> */}
							<CartContainer/>
						{/* Cart */}
					</div>
				</main>
				{/* main */}
				
				{/* Footer */}
					<Footer/>
				{/* Footer */}
			</div>
		)
	}
}

export default App;
