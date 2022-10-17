<template>
  <!-- 头部状态栏 -->
  <NavHeadCompVue />
  <!-- 搜索栏 -->
  <GoodsSearchPage @click="searchGoods" />
  <!-- 搜索的商品展示 -->
  <template v-if="searchResult.length !== 0">
    <div class="goods_list_box">
      <!-- 标题 -->
      <ul class="search_title_box">
        <li>所有宝贝</li>
      </ul>
      <!-- 结果 -->
      <ul class="search_result_box">
        <li v-for="item in searchResult">
          <div class="goods_image_box">
            <img :src="item.goods_image" alt="商品图片" />
          </div>
          <div class="goods_probly_info">
            <p class="goods_price_box">
              ¥{{ item.goods_price }}<span>包邮</span>
            </p>
            <p class="goods_title_box">{{ item.goods_title }}</p>
            <p class="goods_merchants_box">
              <span> <aliwangwang-outlined /> </span>{{ item.goods_merchants }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  <template v-else>
    <div class="nothing_box">
      <a-empty
        image="http://127.0.0.1:3000/image/selflogo/%E6%9C%AA%E6%90%9C%E7%B4%A2%E5%88%B0%E7%9B%B8%E5%85%B3%E5%86%85%E5%AE%B9.png"
        :image-style="{
          height: '500px',
        }"
        description="暂时没有您想要的商品"
      >
      </a-empty>
    </div>
  </template>
</template>

<script setup lang="ts">
import NavHeadCompVue from "../../../components/NavHeadComp.vue";
import GoodsSearchPage from "./goodsSearchComp/SearchInpComp.vue";
import { SEARCH_GOODS } from "../../../http/api/goodsApi";
import { onMounted, ref } from "vue-demi";
import { message } from "ant-design-vue";
import { AliwangwangOutlined } from "@ant-design/icons-vue";
import { useRoute } from "vue-router";

// 搜索类型,搜索内容
let searchTypeRef = ref<any>("");
let searchInfoRef = ref<any>("");
// 搜索结果列表
const searchResult = ref<any[]>([]);

// 搜索请求
const searchGoodsHttp = async (): Promise<void> => {
  const { data } = await SEARCH_GOODS({
    params: {
      searchTypeVal: searchTypeRef.value,
      searchInfoVal: searchInfoRef.value,
    },
  });
  if (data.status === "success") {
    searchResult.value = data.message;
  } else {
    message.error(data.message);
  }
};

// 初始化路由
const route = useRoute();

const searchGoods = (): void => {
  // 取值
  const { searchType, searchInfo } = route.query;
  // searchType: string, searchInfo: string
  searchTypeRef.value = searchType;
  searchInfoRef.value = searchInfo;
  searchGoodsHttp();
};

onMounted((): void => {
  searchGoods();
});
</script>

<style lang="less" scoped>
.goods_list_box {
  width: 1200px;
  margin: 0px auto;

  .search_title_box {
    width: 100%;
    height: 40px;
    border-bottom: 2px solid #f50;
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-bottom: 15px;

    li:nth-child(1) {
      width: 105px;
      height: 40px;
      background: #f50;
      line-height: 40px;
      text-align: center;
      color: #ffff;
      font-size: 16px;
    }
  }

  .search_result_box {
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    box-sizing: border-box;

    li {
      width: calc((100% / 4) - 50px);
      height: 360px;
      margin: 10px 25px;
      border: 1px solid #e4e4e4;
      transition: all 0.5s;
      cursor: pointer;
      background: #ffff;

      .goods_image_box {
        width: 248px;
        height: 248px;
        border-bottom: 1px solid #e4e4e4;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          transition: all 0.5s;
        }
      }
      .goods_probly_info {
        height: calc(360px - 249px);
        padding: 10px;

        p {
          padding: 0;
          margin: 0;
          color: #3d3d3d;
          font-weight: 400;
        }

        .goods_price_box {
          font-size: 18px;
          font-weight: 700;
          color: #f50;
          display: flex;
          align-items: center;
          overflow: hidden;

          span {
            color: #ffff;
            font-size: 12px;
            background: #f50;
            padding: 0 6px;
            font-weight: 100;
            margin-left: 4px;
            border-radius: 2px;
            transform: scale(0.8);
          }
        }

        .goods_title_box {
          font-size: 12px;
        }

        .goods_merchants_box {
          color: #888;
          font-size: 13px;
          margin-top: 5px;
          text-decoration: underline;

          span {
            color: rgb(0, 116, 110);
          }
        }
      }
    }

    li:hover {
      border: 1px solid #f50;
    }

    // 商品标题变红
    li:hover .goods_title_box {
      color: #f50;
      text-decoration: underline;
    }

    // 图片放大
    li:hover img {
      transform: scale(1.2);
    }
  }
}
.nothing_box {
  
}
</style>