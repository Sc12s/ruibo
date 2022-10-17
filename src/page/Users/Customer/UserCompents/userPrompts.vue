<template>
    <div class="user_prompts_box">
        <ul class="text_info_box">
            <li>个人中心</li>
            <li>
                <router-link to="/customerPage/personalHomePage">首页</router-link>
            </li>
            <li>
                <router-link to="/customerPage/personalEditPage">账户设置</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
    .user_prompts_box {
        width: 100%;
        min-width: 1200px;
        height: 60px;
        background: #ff4001;
        .text_info_box {
            width: 1200px;
            height: 100%;
            margin: 0px auto;
            padding: 0;
            list-style-type: none;
            display: flex;
            li {
                height: 60px;
                line-height: 60px;
                color: #fff;
            }
            li:nth-child(1) {
                font-size: 27px;
                font-weight: 700;
                margin-right: 120px;
            }
            li:nth-child(2),
            li:nth-child(3) {
                font-size: 14px;
                margin: 0 20px;
                a {
                    color: #fff;
                    padding-bottom: 15px;
                }
            }
        }
    }
    .router-link-active {
        border-bottom: 1px solid #fff;
    }
</style>