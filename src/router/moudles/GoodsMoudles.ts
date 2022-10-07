// import RouterConfig from "../methods/RouterConfig";

const GoodsRouter = [
    {
        path: '/goodsDetailsPage/:id',
        name: 'GoodsDetailsPage',
        component: () => import('../../page/Goods/goodsDetails/GoodsDetailsPage.vue')
    }
]

export default GoodsRouter