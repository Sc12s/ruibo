<template>
    <div class="container">
        <!-- 滚动后显示的顶栏 -->
        <srollSearchComp v-if="isShowSearchBox" />
        <!-- 顶部导航栏组件 -->
        <NavHeadComp />
        <!-- 搜索栏 -->
        <SearchComp />
        <!-- 中间主要内容 -->
        <a-card class="main_content_box">
            <!-- 轮播图/分类等 -->
            <TopContextComp />
            <!-- 推荐内容等 -->
            <recommendedGoodsComp />
            <!-- 说明事项 -->
            <ImportantNotesComp />
        </a-card>
        <!-- 底部信息等 -->
        <bottomContentCompVue />
    </div>
</template>

<script lang="ts" setup>
import NavHeadComp from '../../components/NavHeadComp.vue'
import bottomContentCompVue from './HomeComponents/bottomContentComp.vue';
import TopContextComp from './HomeComponents/topContentComp.vue';
import SearchComp from './HomeComponents/searchComp.vue';
import recommendedGoodsComp from './HomeComponents/recommendedGoodsComp.vue';
import ImportantNotesComp from './HomeComponents/ImportantNotesComp.vue'
import srollSearchComp from './HomeComponents/srollSearchComp.vue';
import { ref } from '@vue/reactivity';

// 是否显示滚动搜索栏
let isShowSearchBox = ref<boolean>(false)

// 滚动条事件
// window.onscroll = () => {
//     let srollTopNum = window.pageYOffset
//     if (srollTopNum > 85) {
//         isShowSearchBox.value = true
//     } else {
//         isShowSearchBox.value = false
//     }
// }
window.addEventListener('scroll', () => {
    let srollTopNum: number = window.pageYOffset
    if (srollTopNum > 85) {
        isShowSearchBox.value = true
    } else {
        isShowSearchBox.value = false
    }
})


</script>

<style lang="less" scoped>
.container {
    background-image: linear-gradient(to left, #ecf5ff, #fef0f0);
    min-width: 1200px;

    .main_content_box {
        width: 1200px;
        margin: auto;
        border-radius: 18px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 5%);
    }
}
</style>