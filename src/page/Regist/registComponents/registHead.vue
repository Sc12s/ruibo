<template>
    <div class="regist_head_box">
        <div class="left_logo_box">
            <router-link to="/">
                <h1>ruibo</h1>
                <span>瑞博</span>
            </router-link>
        </div>
        <div class="regist_title">用户注册</div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.regist_head_box {
    width: 100%;
    height: 80px;
    display: flex;

    .left_logo_box {
        height: 100%;
        color: #ff4001;

        a {
            color: #ff4001;
            h1 {
                margin: 0;
                font-size: 35px;
                color: #ff4001;
            }

            span {
                display: inline-block;
                width: 80px;
                font-weight: 700;
                font-style: italic;
                text-align: center;
            }
        }
    }

    .regist_title {
        padding-left: 15px;
        height: 80px;
        line-height: 80px;
        font-size: 22px;
        color: #3c3c3c;
    }
}
</style>