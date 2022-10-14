<template>
  <div class="search_Gds">
    <ul class="logo_and_searchBox">
      <li>ruibo</li>
      <li>
        <input type="text" v-model="searchCont" placeholder="请搜索你想要的商品">
        <div class="btn_box">
          <button @click="searchGoods">搜索</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

let searchCont = ref<string>('')

// 搜索货物
const searchGoods = () => {
  // 路由跳转传值
  
}
</script>

<style lang="less" scoped>
.search_Gds {
  width: 100%;
  min-width: 1200px;
  height: 80px;
  margin-bottom: 25px;
  background: #fff;

  .logo_and_searchBox {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    width: 990px;
    margin: 0px auto;
    padding: 0;
    justify-content: flex-start;

    li {
      height: 80px;
    }

    li:nth-child(1) {
      color: #FF5000;
      font-size: 40px;
      font-style: italic;
      font-weight: 700;
      line-height: 80px;
      margin-right: auto;
    }

    li:nth-child(2) {
      width: 320px;
      display: flex;
      align-items: center;

      // 输入框
      input {
        width: 240px;
        height: 40px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        background: #EBEBEB;
        border: 1px solid #EBEBEB;
        padding-left: 15px;
      }

      input:focus {
        outline: none;
      }

      // 搜索按钮
      .btn_box {
        width: 80px;
        height: 40px;
        background: #EBEBEB;
        padding: 2px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;

        button {
          width: 100%;
          height: 36px;
          border: 0;
          border-radius: 20px;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          font-family: "宋体";
          background: linear-gradient(to right,#ff9000 0,#ff5000 100%);
          cursor: pointer;
        }
      }
    }
  }
}
</style>