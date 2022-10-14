<template>
    <div class="nav_top_container">
        <ul>
            <!-- 左边盒子 -->
            <span v-if="tokenStatus">
                <!-- 邮箱框 -->
                <a-popover placement="bottom">
                    <template #content>
                        <div style="text-align:center">
                            <a-avatar size="large" :src="userInfo.avater"></a-avatar>
                            <div style="margin-top: 10px">{{ userInfo.username }}</div>
                            <a-button type="link" danger @click="signOut">退出登录</a-button>
                        </div>
                    </template>
                    <template #title>
                        <span>个人信息</span>
                    </template>
                    <div class="username_box">欢迎！用户：{{ userInfo.username }}</div>
                </a-popover>
            </span>
            <span v-else>
                <li v-for="value in navheadList.slice(0, 2)" :key="value.path">
                    <router-link :to="value.path">{{ value.title }}</router-link>
                </li>
            </span>
            <!-- 右边盒子 -->
            <span>
                <li v-for="value in navheadList.slice(2, navheadList.length)" :key="value.path">
                    <router-link :to="value.path">{{ value.title }}</router-link>
                </li>
            </span>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { message } from "ant-design-vue";
import { storeToRefs } from "pinia";
import { removeCookie } from "../http/CookieOperation";
// pinia方法 
import { GlobalStore } from '../store/index'
// 退出登录方法
import { SIGN_OUT_ACCOUNT } from '../http/api/loginApi'
// 实例化GlobalStore
const store = GlobalStore()
const { userInfo, tokenStatus, uuid } = storeToRefs<any>(store)


interface navHeadListType {
    title: string,
    path: string,
}


const navheadList = ref<navHeadListType[]>([
    {
        title: '亲，请登录',
        path: '/loginPage'
    },
    {
        title: '免费注册',
        path: '/registPage'
    },
    {
        title: '瑞博首页',
        path: '/'
    },
    {
        title: '个人中心',
        path: ''
    },
    {
        title: '购物车',
        path: '/goodsCarPage'
    },
    {
        title: '商品分类',
        path: ''
    },
    {
        title: '联系客服',
        path: ''
    },
])

// 退出登录
const signOut = () => {
    SIGN_OUT_ACCOUNT({ key: uuid.value }).then((res: any) => {
        if (res.data.status === 'success') {
            removeCookie('token')
            store.$reset();
            message.success('退出登录成功')
        } else {
            message.error('退出登录失败')
        }
    })
}


onMounted(() => {
    store.validationToken()
})

</script>


<style lang="less" scoped>
.nav_top_container {
    width: 100%;
    min-width: 1200px;
    background-color: #f5f5f5;
    height: 35px;
    line-height: 35px;

    ul {
        list-style-type: none;
        display: flex;
        padding: 0;
        margin: 0;
        width: 1200px;
        margin: 0px auto;
        justify-content: flex-start;

        span {
            display: flex;

            .username_box {
                color: #6c6c6c;
                cursor: pointer;
            }

            li {
                margin: 0 10px;
                cursor: pointer;
                color: #6c6c6c;

                a {
                    color: #6c6c6c;
                }
            }

            li:hover,
            a:hover {
                color: #F22E00;
                text-decoration: underline;
                transition: all .3s;
            }
        }

        span:nth-child(1) {
            li:nth-child(1) {
                color: #F22E00;
            }
        }

        span:nth-child(2) {
            margin-left: auto;
        }
    }
}
</style>