import serviceAxios from '../index'

// 商品信息
const GOODS_LIST = (params:any): any => {    
    return serviceAxios({
        method: 'get',
        url: '/goodsrRemmGoods',
        params
    })
}

// 单个商品查询
const GOODS_DETAILS = (params:any): any => {    
    return serviceAxios({
        method: 'get',
        url: '/singleGoodsSearch',
        params
    })
}

// 加入购物车
const ADD_GOODS_CAR = (data: any): any => {
    return serviceAxios({
        method: 'post',
        url: '/addGoodsCar',
        data
    })
}

export {
    GOODS_LIST,
    GOODS_DETAILS,
    ADD_GOODS_CAR
}