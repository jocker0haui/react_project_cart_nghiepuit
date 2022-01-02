import * as Types from '../constants/ActionType'

var data = JSON.parse(localStorage.getItem('CART'))


// var initialState = [
//     {
//         product : {
//             id : 1 ,
//             name : 'iphone 13 promax',
//             image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217819171028_iphone-13-pro-max-bac-1.jpg' ,
//             description : 'sp lỗi đó mua đi' ,
//             price : 1 ,
//             imventory : 999,
//             rating : 4
//         },
//         quantity : 5
//     },
//     {
//         product : {
//             id : 2 ,
//             name : 'iphone 12 promax',
//             image : 'https://cdn.tgdd.vn/Products/Images/42/250728/iphone-13-pro-max-gold-1-600x600.jpg' ,
//             description : 'sp lỗi đó mua đi' ,
//             price : 0.9 ,
//             imventory : 777,
//             rating : 0
//         },
//         quantity : 5
//     }
// ]
var initialState = data ? data : []

const cart = ( state = initialState , action ) => {
    var {product,quantity} = action
    var index = -1
    switch(action.type){
        case Types.ADD_TO_CART :
            // console.log(action)
            index = findProductInCart(state,product)
            if(index !== -1 ){
                state[index].quantity += quantity
            }else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state]
        case Types.DELETE_PRODUCT_IN_CART :
            index = findProductInCart(state,product)
            if(index !== -1 ){
                state.splice(index,1)
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state]
        case Types.UPDATE_PRODUCT_IN_CART :
            index = findProductInCart(state,product)
            if(index !== -1 ){
                state[index].quantity = quantity
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state]
        default : return [...state]
    }
}
function findProductInCart  (cart,product) {
    var index = -1
    if(cart.length > 0){
        for(var i = 0 ; i < cart.length ; i++){
            if(cart[i].product.id === product.id){
                index = i
                break
            }
        }
    }
    return index
}
export default cart