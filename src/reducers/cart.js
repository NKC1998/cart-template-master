import *as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product : {
                id : 1,
                name : 'Iphone 7 Plus',
                image : 'https://www.xtmobile.vn/vnt_upload/product/04_2018/thumbs/600_7_plus_red_800x800.jpg',
                decription : 'Sản phẩm do apple sản phẩm',
                price : 500,
                inventory : 10,
                rating : 4
        },
        quantity : 5
    }
];

const cart = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_TO_CART:
            console.log(action)
            return [...state]
        default : return [...state];
    }
}

export default cart;