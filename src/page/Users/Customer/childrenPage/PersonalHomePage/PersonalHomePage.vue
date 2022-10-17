<template>
  <!-- 个人首页 -->
  <ul class="personal_application_box">
    <!-- 左边应用列表 -->
    <li class="left_app_list">
      <ul>
        <h4>全部功能</h4>
        <li v-for="(item, index) in appList" :key="index">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </li>
    <!-- 中间应用视图 -->
    <li class="right_app_views">
      <router-view></router-view>
    </li>
    <!-- 右边日期视图 -->
    <li class="data_view_box">
      <h3>我的日历</h3>
      <p>
        <h1>{{ nowDate.nowDay }}</h1>
        <div>{{ nowDate.nowWeek }}</div>
        <div>{{ nowDate.nowYear }}.{{ nowDate.nowMonth }}</div>
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, reactive, readonly } from "vue-demi";
// 类型限制
interface applistType {
  name: string;
  path: string;
}

// 功能列表渲染
const appList = readonly<applistType[]>([
  {
    name: "个人首页",
    path: "/customerPage/personalHomePage/userViewsApp",
  },
  {
    name: "浏览历史",
    path: "/customerPage/personalHomePage/browingHistoryPage",
  },
  {
    name: "收货地址管理",
    path: "/customerPage/personalHomePage/userAddressPage",
  },
]);

let nowDate = reactive<any>({});
const getNowDate = () => {
  const date = new Date();
  // 获取年
  nowDate.nowYear = date.getFullYear();
  // 获取月
  nowDate.nowMonth = date.getMonth() + 1;
  // 获取星期几
  switch (date.getDay()) {
    case 0:
      nowDate.nowWeek = "星期日";
      break;
    case 1:
      nowDate.nowWeek = "星期一";
      break;
    case 2:
      nowDate.nowWeek = "星期二";
      break;
    case 3:
      nowDate.nowWeek = "星期三";
      break;
    case 4:
      nowDate.nowWeek = "星期四";
      break;
    case 5:
      nowDate.nowWeek = "星期五";
      break;
    case 6:
      nowDate.nowWeek = "星期六";
      break;
    default:
      nowDate.nowWeek = "获取失败";
      break;
  }
  // 获取日
  nowDate.nowDay = date.getDate();
};

onMounted((): void => {
  getNowDate();
});
</script>

<style lang="less" scoped>
.personal_application_box {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  // 应用列表视图
  .left_app_list {
    ul {
      width: 230px;
      height: 500px;
      color: #000000;
      padding: 0;
      margin: 0;
      list-style-type: none;
      font-size: 15px;
      li {
        padding-left: 10px;
        margin: 10px 0 0 0;
        transition: all 0.5s;
        cursor: pointer;
        font-size: 13px;
      }
      li:hover a {
        color: #ff4001;
      }
    }
  }
  // 中间视图
  .right_app_views {
    width: calc(1200px - 480px);
  }
  // 日期视图
  .data_view_box {
    width: 230px;
    height: 190px;
    margin-left: 20px;
    border: 1px solid #cfe5d4;
    h3 {
      text-align: center;
      font-size: 700;
      padding: 5px 0;
      color: #fff;
      background: #5ec884;
      margin: 0;
    }
    p {
      color: #5ac575;
      height: 152px;
      background: #e1f8e7;
      margin: 0;
      text-align: center;
      h1 {
        color: #5ac575;
        font-size: 60px;
        margin: 0;
      }
    }
  }
}
// 路由高亮
.router-link-active {
  color: #f44001;
}
</style>