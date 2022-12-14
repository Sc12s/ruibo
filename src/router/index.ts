import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { validLogin } from './methods/validationLogin'
// 货物路由导入
import GoodsRouter from './moudles/GoodsMoudles'
import usersRouter from './moudles/usersMoudles'


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/homePage'
    },
    // 首页
    {
        path: '/homePage',
        name: 'HomePage',
        component: () => import('../page/Home/HomePage.vue')
    },
    // 登录页面
    {
        path: '/loginPage',
        name: 'LoginPage',
        component: () => import('../page/Login/LoginPage.vue')
    },
    // 注册页面
    {
        path: '/registPage',
        name: 'RegistPage',
        component: () => import('../page/Regist/RegistPage.vue')
    },
    // 直播页面
    {
        path: '/livePage',
        name: 'LivePage',
        component: () => import('../page/Live/LivePage.vue')
    },
    // 货物路由
    ...GoodsRouter,
    // 用户中心路由
    ...usersRouter
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // 加载条
    nprogress.start()
    if (to.name === 'LoginPage' || to.name === 'RegistPage' || to.name === 'HomePage') {
        return next()
    } else {
        // 判断是否登录
        validLogin(next)
    }
})



router.afterEach(()=>{
    nprogress.done();
})

export default router