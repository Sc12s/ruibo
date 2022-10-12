// import RouterConfig from "../methods/RouterConfig";

const GoodsRouter = [
    // 货物详情
    {
        path: '/goodsDetailsPage/:id',
        name: 'GoodsDetailsPage',
        component: () => import('../../page/Goods/goodsDetails/GoodsDetailsPage.vue')
    },
    // 购物车
    {
        path: '/goodsCarPage',
        name: 'GoodsCarPage',
        component: () => import('../../page/Goods/goodsCar/GoodsCarPage.vue')
    }
]

export default GoodsRouter