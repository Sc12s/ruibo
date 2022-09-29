<template>
  <!-- 总体盒子 -->
  <ul class="top_content_box">
    <!-- 左部盒子 -->
    <li class="left_box">
      <ul class="classificatiom_box">
        <!-- 分类标题 -->
        <h2>分类</h2>
        <!-- 分类元素 -->
        <li v-for="item in goodsClassifyList" :key="item.path">
          <!-- 图标 -->
          <i :class="'iconfont ' + item.icon"></i>
          <!-- 分类名称 -->
          <span v-for="title in item.classifyList">{{title}}</span>
        </li>
      </ul>
    </li>
    <!-- 右边盒子 -->
    <li class="right_box">
      <!-- 右边盒子顶部内容 -->
      <ul class="right_top_nav_box">
        <li v-for="navinfo in topNavList" :key="navinfo.path">
          <router-link :to="navinfo.path">{{ navinfo.title }}</router-link>
        </li>
      </ul>
      <!-- 右边盒子下部分内容 -->
      <ul class="right_bottom_box">
        <!-- 轮播图 -->
        <li class="shuffling_box">
          <a-carousel autoplay arrows>
            <!-- 左右箭头 -->
            <template #prevArrow>
              <div class="custom-slick-arrow"
                style="left: 0px;border-top-right-radius: 50%;border-bottom-right-radius: 50%;z-index: 1">
                &lt;
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow"
                style="right: 0px;border-top-left-radius: 50%;border-bottom-left-radius: 50%;">
                &gt;
              </div>
            </template>
            <!-- 要轮播的图 -->
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </a-carousel>
        </li>
        <li class="user_box">
          <userInfoCompVue />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts" setup>
// 阿里巴巴图标导入
import './icon/alibaba/icon.css'
import { markRaw } from "@vue/reactivity";
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
// 组件导入
import userInfoCompVue from './userInfoComp.vue';


// 分类列表数据类型限制
interface goodsClassifyType {
  icon: string,
  classifyList: string[],
  path: string
}

// 右边顶部列表类型限制
interface topNavType {
  title: string,
  path: string
}

// 分类列表数据
const goodsClassifyList = markRaw<goodsClassifyType[]>([
  // 女装
  {
    icon: 'icon-nvzhuang',
    classifyList: ["女装", "内衣", "奢品"],
    path: ''
  },
  // 鞋子
  {
    icon: 'icon-xiezi',
    classifyList: ["女鞋", "男鞋", "箱包"],
    path: ''
  },
  // 化妆品
  {
    icon: 'icon-xiangshui',
    classifyList: ["美妆", "饰品", " 洗护"],
    path: ''
  },
  // 男装
  {
    icon: 'icon-nanzhuang',
    classifyList: ["男装", "运动", "百货"],
    path: ''
  },
  // 数码
  {
    icon: 'icon-shouji',
    classifyList: ["手机", "数码", "企业礼品"],
    path: ''
  },
  // 家具
  {
    icon: 'icon-shafa',
    classifyList: ["家装", "电器", "车品"],
    path: ''
  },
  // 食品
  {
    icon: 'icon-yingtao',
    classifyList: ["食品", "生鲜", "母婴"],
    path: ''
  },
  // 医药
  {
    icon: 'icon-yaoxiang',
    classifyList: ["医药", "保健", "进口"],
    path: ''
  },
])

// 右边顶部列表
const topNavList = markRaw<topNavType[]>([
  {
    title: "瑞博",
    path: '/'
  },
  {
    title: "聚划算",
    path: ''
  },
  {
    title: "瑞博超市",
    path: ''
  },
  {
    title: "拍卖",
    path: ''
  },
  {
    title: "旅行",
    path: ''
  },
  {
    title: "特卖",
    path: ''
  },
  {
    title: "极有家",
    path: ''
  },
  {
    title: "直播",
    path: '/livePage'
  },
])

</script>

<style lang="less" scoped>
.top_content_box {
  width: 100%;
  height: 328px;
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;

  // 左边分类盒子
  .left_box {
    width: calc(100% - 880px);
    height: 100%;

    // 分类内部盒子
    .classificatiom_box {
      width: calc(100% - 15px);
      background-color: #F7F9FA;
      border-radius: 12px;
      height: 100%;
      padding: 16px;
      list-style-type: none;

      // 分类标题
      h2 {
        font-weight: bold;
        font-family: "宋体";
      }

      // 每一层的分类盒子
      li {
        height: calc(100% / 9);
        color: #666666;

        // icon
        i {
          margin-right: 10px;
        }

        span:hover {
          text-decoration: underline;
        }

        // 每一行的第二个spn
        span:nth-child(3)::after {
          content: '/';
          margin: 0 10px;
        }

        span:nth-child(3)::before {
          content: '/';
          margin: 0 10px;
        }
      }

      li:hover {
        color: red;
        cursor: pointer;
      }
    }
  }

  .right_box {
    width: 880px;

    // 右边盒子顶部导航栏
    .right_top_nav_box {
      background-color: #F7F9FA;
      display: flex;
      list-style-type: none;
      padding: 0;
      margin: 0;
      height: 42px;
      border-radius: 12px;

      li {
        line-height: 42px;
        font-size: 16px;
        width: calc(100% / 8);
        text-align: center;
        cursor: pointer;

        a:visited {
          color: #333333;
        }
      }

      li:nth-child(1),
      li:nth-child(2),
      li:nth-child(3) {
        font-weight: 700;
      }

      li:nth-child(3) {
        a {
          color: #33c900;
        }
      }

      li:nth-child(1),
      li:nth-child(2) {
        a {
          color: #ff0036;
        }
      }

      li:hover a {
        color: #ff0036;
      }
    }

    // 下半部分轮播图用户信息盒子
    .right_bottom_box {
      width: 100%;
      height: calc(100% - 52px);
      padding: 0;
      margin: 10px 0 0 0;
      list-style-type: none;
      display: flex;

      // 轮播图盒子
      .shuffling_box {
        width: 565px;
        height: 100%;
        border-radius: 12px;
        overflow: hidden;

        .ant-carousel :deep(.slick-slide) {
          text-align: center;
          height: 276px;
          line-height: 276px;
          background: #33c900;
          overflow: hidden;
        }

        .ant-carousel :deep(.slick-slide h3) {
          color: #fff;
        }

        // 箭头样式
        // 箭头默认隐藏
        .ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
          background: rgba(0, 0, 0, 0.7);
          width: 22px;
          height: 30px;
          opacity: 0;
          color: #fff;
          font-size: 20px;
          line-height: 25px;
          text-align: center;
        }

        // 默认箭头隐藏
        .ant-carousel :deep(.custom-slick-arrow:before) {
          display: none;
        }

      }

      // 当移入轮播图时，箭头显示
      .shuffling_box:hover .ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
        transition: all .4s;
        opacity: .5;
      }
    }
  }
}
</style>