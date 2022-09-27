<template>
  <ul class="user_container">
    <!-- 用户名和头像框盒子 -->
    <li>
      <a-avatar :size="64">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
      <p>Hi！你好</p>
    </li>
    <!-- 按钮 -->
    <li>
      <router-link to="/loginPage">登录</router-link>
      <router-link to="/">注册</router-link>
      <router-link to="/">开店</router-link>
    </li>
    <!-- 发货等图标 -->
    <li>
      <div>
        <router-link to="/">
          <i class="iconfont icon-shoucang"></i>
          <span>宝贝收藏</span>
        </router-link>
      </div>
      <div>
        <router-link to="/">
          <i class="iconfont icon-gouwudai"></i>
          <span>买过的店</span>
        </router-link>
      </div>
      <div>
        <router-link to="/">
          <i class="iconfont icon-dianpu"></i>
          <span>收藏的店</span>
        </router-link>
      </div>
      <div>
        <router-link to="/">
          <i class="iconfont icon-zuji"></i>
          <span>我的足迹</span>
        </router-link>
      </div>
    </li>
    <!-- 消息轮播 -->
    <li>
      <a-carousel autoplay :dots="false">
        <div v-for="info in newsList" :key="info.path">
          <span class="hotNews">{{ info.tag }}</span> {{ info.title }}
        </div>
      </a-carousel>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { UserOutlined } from '@ant-design/icons-vue';
import { ref } from '@vue/reactivity';

interface newsListType {
  tag: string
  title: string
  path: string
}

const newsList = ref<newsListType[]>([
  {
    tag: '规则',
    title: '关于地区发货问题',
    path: '/'
  },
  {
    tag: '热点',
    title: '关于用户注册的一些问题',
    path: '/'
  },
])

</script>

<style lang="less" scoped>
.user_container {
  width: 315px;
  height: 100%;
  list-style-type: none;
  margin: 0px;
  padding: 0 0 0 30px;
  display: flex;
  flex-direction: column;

  li {
    width: 100%;
  }

  // 用户名头像盒子
  li:nth-child(1) {
    flex: 5;
    text-align: center;

    .ant-avatar {
      margin-top: 12px;
    }

    p {
      margin-top: 10px;
    }
  }

  // 按钮盒子
  li:nth-child(2) {
    flex: 2;

    a {
      color: #fff;
      display: inline-block;
      width: 80px;
      height: 42px;
      border-radius: 40px;
      text-align: center;
      line-height: 42px;
      font-size: 16px;
      font-weight: 700;
      margin: 4px 7px;
    }

    a:nth-child(1) {
      background-color: #ff5000;
    }

    a:nth-child(2) {
      background-color: #ff6000;
    }

    a:nth-child(3) {
      color: #ff5000;
      border: 1px solid #ff6000;
    }
  }

  // 店铺收藏等
  li:nth-child(3) {
    flex: 3;
    display: flex;

    div {
      width: 48px;
      height: 48px;
      text-align: center;
      margin: 4px 11px;
      cursor: pointer;

      a {
        color: #3c3c3c;

        i {
          font-size: 24px;
        }

        span {
          display: inline-block;
          font-size: 12px;
        }
      }
    }

    div:hover a {
      color: #ff5000;
    }
  }

  // 消息轮播盒子
  li:nth-child(4) {
    flex: 1;

    .ant-carousel {
      height: 100%;

      div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        cursor: pointer;

        .hotNews {
          background: #ffefef;
          padding: 0 4px;
          color: #ff5000;
          margin-right: 7px;
        }
      }

      div:hover {
        color: #ff5000;
      }
    }
  }
}
</style>