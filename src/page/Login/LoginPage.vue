<template>
    <!-- 顶部状态栏 -->
    <div class="nav_head">
        <loginNavHead />
    </div>
    <div class="login_box">
        <loginBoxComp />
    </div>

</template>

<script setup lang="ts">
import loginBoxComp from './LoginComponents/loginBoxComp.vue';
import loginNavHead from './LoginComponents/loginNavHead.vue';

</script>

<style scoped lang="less">
.nav_head {
    width: 100%;
    height: 88px;
    min-width: 1200px;
    border-bottom: 1px solid #f5f5f5;
}
.login_box {
    width: 100%;
    min-width: 1200px;
    height: 600px;
    background: url(./LoginComponents/background/background.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>