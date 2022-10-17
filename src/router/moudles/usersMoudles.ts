const usersRouter = [
    // 个人用户页面
    {
        path: '/customerPage',
        name: 'CustomerPage',
        component: () => import('../../page/Users/Customer/CustomerPage.vue'),
        redirect: '/customerPage/personalHomePage',
        children: [
            // 用户购买信息等展示
            {
                path: 'personalHomePage',
                name: 'PersonalHomePage',
                component: () => import('../../page/Users/Customer/childrenPage/PersonalHomePage/PersonalHomePage.vue'),
                redirect: '/customerPage/personalHomePage/userViewsApp',
                children: [
                    // 用户基本功能
                    {
                        path: 'userViewsApp',
                        name: 'UserViewsApp',
                        component: () => import('../../page/Users/Customer/childrenPage/PersonalHomePage/childrenPage/userBasicApp/userBasicApp.vue'),
                    },
                    // 浏览历史
                    {
                        path: 'browingHistoryPage',
                        name: 'BrowingHistoryPage',
                        component: () => import('../../page/Users/Customer/childrenPage/PersonalHomePage/childrenPage/BrowsingHistory/browingHistory.vue'),
                    },
                    // 地址管理
                    {
                        path: 'userAddressPage',
                        name: 'userAddressPage',
                        component: () => import('../../page/Users/Customer/childrenPage/PersonalHomePage/childrenPage/UserAddress/userAddress.vue'),
                    }
                ]
            },
            // 用户信息修改展示
            {
                path: 'personalEditPage',
                name: 'PersonalEditPage',
                component: () => import('../../page/Users/Customer/childrenPage/PersonalEditPage/PersonalEditPage.vue'),
            }
        ]
    },
    // 商家页面
]

export default usersRouter