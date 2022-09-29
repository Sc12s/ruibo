import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

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
    // 直播页面
    {
        path: '/livePage',
        name: 'LivePage',
        component: () => import('../page/Live/LivePage.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router