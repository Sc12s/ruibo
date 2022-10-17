<template>
  <div class="customer_info_box">
    <ul class="userbar">
      <li class="avatarName">
        <img :src="userInfo.avater" /><span
          >{{ userInfo.username }}（{{ userInfo.account }}）</span
        >
      </li>
      <li class="userAddress">
        <router-link to="/">我的收货地址</router-link>
      </li>
    </ul>
    <ul class="tool_box">
      <li>
        <span>待付款</span>
      </li>
      <li>
        <span>代发货</span>
      </li>
      <li>
        <span>待收获</span>
      </li>
      <li>
        <span>待评价</span>
      </li>
      <li>
        <span>退款</span>
      </li>
    </ul>
  </div>
</template>
  
<script lang="ts" setup>
// pinia方法
import { storeToRefs } from "pinia";
import { GlobalStore } from "../../../../../../../../store/index";
const store = GlobalStore();
const { userInfo } = storeToRefs<any>(store);
</script>
  
<style lang="less" scoped>
.customer_info_box {
  width: 100%;
  height: 120px;
  border: 1px solid #e4eaee;
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
  }
  .userbar {
    height: 70px;
    padding: 10px;
    border-bottom: 1px solid #e4eaee;
    background: #F5F8FA;
    .avatarName {
      display: flex;
      img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
      }
      span {
        margin: 6px 0 0 15px;
      }
    }
    .userAddress {
      height: 50px;
      line-height: 50px;
      margin-left: auto;
      color: #546d7e;
      margin-right: 20px;
      a {
        color: #546d7e;
        transition: all 0.5s;
      }
    }
    .userAddress:hover a {
      color: #ff5000;
    }
  }
  .tool_box {
    height: 50px;
    background: #fff;
    li {
      text-align: center;
      flex: 1;
      display: flex;
      align-items: center;
      color: #4b4b4b;
      span {
        display: inline-block;
        width: 100%;
        border-right: 1px solid #e4eaee;
        font-size: 12px;
      }
    }
  }
}
</style>