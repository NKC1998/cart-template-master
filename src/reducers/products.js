var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : 'https://www.xtmobile.vn/vnt_upload/product/04_2018/thumbs/600_7_plus_red_800x800.jpg',
        decription : 'Sản phẩm do apple sản phẩm',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 1,
        name : 'Iphone 8 Plus',
        image : 'https://product.hstatic.net/1000063620/product/iphone-8-plus-den-mhm_6d96506c586c442391e01380611103b2_grande.jpg',
        decription : 'Sản phẩm do apple sản phẩm',
        price : 1000,
        inventory : 50,
        rating : 3
    },
    {
        id : 1,
        name : 'Iphone X',
        image : 'https://www.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/ip_X/thumbs/(600x600)_crop_iphone-x-64gb-gray-xtmobile.jpg',
        decription : 'Sản phẩm do apple sản phẩm',
        price : 2000,
        inventory : 20,
        rating : 5
    },
]

const product = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default product;