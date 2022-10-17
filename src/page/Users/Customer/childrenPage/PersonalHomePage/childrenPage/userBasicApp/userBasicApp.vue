<template>
  <div class="app_views_box">
    <!-- 个人信息展示 -->
    <PersonalInfoComp />
    <!-- 物流信息展示 -->
    <logisticsInfoComp />
    <!-- 商品推荐 -->
    <recommendGoodsComp />
  </div>
</template>

<script lang="ts" setup>
import logisticsInfoComp from './compents/logisticsInfoComp.vue';
import PersonalInfoComp from './compents/PersonalInfoComp.vue'
import recommendGoodsComp from './compents/recommendGoodsComp.vue';
</script>

<style lang="less" scoped>
.app_views_box {
    // border: 1px solid red;
    width: 100%;
}
</style>