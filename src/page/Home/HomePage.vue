<template>
    <div class="container">
        <!-- 顶部导航栏组件 -->
        <NavHeadComp />
        <!-- 中间主要内容 -->
        <a-card class="main_content_box">
            <!-- 轮播图/分类等 -->
            <TopContextComp />
        </a-card>
        <!-- 顶部信息等 -->
        <bottomContentCompVue />
    </div>
</template>

<script lang="ts" setup>
import NavHeadComp from '../../components/NavHeadComp.vue'
import bottomContentCompVue from './HomeComponents/bottomContentComp.vue';
import TopContextComp from './HomeComponents/topContentComp.vue';

</script>

<style lang="less" scoped>
.container {
    background-image: linear-gradient(to left, #ecf5ff, #fef0f0);

    .main_content_box {
        width: 1200px;
        margin: auto;
        border-radius: 18px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 5%);
    }
}
</style>