import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/homePage'
    },
    {
        path: '/homePage',
        name: 'HomePage',
        component: () => import('../page/Home/HomePage.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router