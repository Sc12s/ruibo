import serviceAxios from '../index'

const GOODS_LIST = (params:any): any => {    
    return serviceAxios({
        method: 'get',
        url: '/goodsrRemmGoods',
        params
    })
}

const GOODS_DETAILS = (params:any): any => {    
    return serviceAxios({
        method: 'get',
        url: '/singleGoodsSearch',
        params
    })
}

export {
    GOODS_LIST,
    GOODS_DETAILS
}