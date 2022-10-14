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
    },
    // 货物搜索
    {
        path: '/goodsSearchPage',
        name: 'GoodsSearchPage',
        component: () => import('../../page/Goods/goodsSearch/GoodsSearchPage.vue')
    }
]

export default GoodsRouter