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

// 获取购物车信息
const GET_GOODS_CAR_LIST = (data: any): any => {
    return serviceAxios({
        method: 'post',
        url: '/getGoodsCarList',
        data
    })
}

// 商品搜索
const SEARCH_GOODS = (params: any): any => {
    return serviceAxios({
        method: 'get',
        url: '/searchGoods',
        params
    })
}

// 随机推荐9条数据
const RAND_REMM_GOODS = (): any => {
    return serviceAxios({
        method: 'get',
        url: '/remmGoods'
    })
}

// 添加浏览历史记录
const ADD_BROWING_HISTORY = (data: any): any => {
    return serviceAxios({
        method: 'post',
        url: '/addBrowingHistory',
        data
    })
}

// 读取浏览历史
const GET_BROWING_HISTORY = (params: any): any => {
    return serviceAxios({
        method: 'get',
        url: '/getBrowingHistory',
        params
    })
}

export {
    GOODS_LIST,
    GOODS_DETAILS,
    ADD_GOODS_CAR,
    GET_GOODS_CAR_LIST,
    SEARCH_GOODS,
    RAND_REMM_GOODS,
    ADD_BROWING_HISTORY,
    GET_BROWING_HISTORY
}