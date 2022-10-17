<template>
  <!-- 头部导航栏 -->
  <NavHeadCompVue />
  <!-- 顶部提示信息 -->
  <userPrompts />
  <!-- 用户信息展示 -->
  <div class="user_views_box">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup lang="ts">
// 头部导航栏导入
import NavHeadCompVue from "../../../components/NavHeadComp.vue";
// 顶部提示栏导入
import userPrompts from "./UserCompents/userPrompts.vue";
</script>

<style lang="less" scoped>
.user_views_box {
  width: 1200px;
  margin: 20px auto;
}
</style>