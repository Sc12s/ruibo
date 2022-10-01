<template>
    <div class="nav_top_container">
        <ul>
            <span>
                <li v-for="value, index in navheadList.slice(0, 2)" :key="value.path">
                    {{ value.title }}
                </li>
            </span>
            <span>
                <li v-for="value, index in navheadList.slice(2, navheadList.length)" :key="value.path">
                    {{ value.title }}
                </li>
            </span>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

interface navHeadListType {
    title: string,
    path: string,
}

const navheadList = ref<navHeadListType[]>([
    {
        title: '亲，请登录',
        path: ''
    },
    {
        title: '免费注册',
        path: ''
    },
    {
        title: '个人中心',
        path: ''
    },
    {
        title: '购物车',
        path: ''
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

            li {
                margin: 0 10px;
                cursor: pointer;
                color: #6c6c6c;
            }

            li:hover {
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