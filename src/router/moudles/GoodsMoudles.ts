import { RouteRecordRaw } from "vue-router";
import RouterConfig from "../methods/RouterConfig";

const GoodsRouter: RouterConfig[] = [
    {
        path: '/goodsDetailsPage',
        name: 'GoodsDetailsPage',
        component: () => import('../../page/Goods/goodsDetails/GoodsDetailsPage.vue')
    }
]

export default GoodsRouter