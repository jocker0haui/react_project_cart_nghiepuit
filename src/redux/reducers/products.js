var initialState = [
    {
        id : 1 ,
        name : 'iphone 13 promax',
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217819171028_iphone-13-pro-max-bac-1.jpg' ,
        description : 'sp lỗi đó mua đi' ,
        price : 1 ,
        imventory : 999,
        rating : 4
    },
    {
        id : 2 ,
        name : 'iphone 12 promax',
        image : 'https://cdn.tgdd.vn/Products/Images/42/250728/iphone-13-pro-max-gold-1-600x600.jpg' ,
        description : 'sp lỗi đó mua đi' ,
        price : 0.9 ,
        imventory : 777,
        rating : 0
    }
]

const products = ( state = initialState , action ) => {
    switch(action.type){
        default : return [...state]
    }
}

export default products