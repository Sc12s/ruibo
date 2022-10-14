<template>
  <div class="search_content_box">
    <h1>ruibo</h1>
    <div class="search_box">
      <!-- 搜索框 -->
      <div class="search_container">
        <a-input
          size="large"
          placeholder="请搜索要查找的商品"
          :bordered="false"
          class="search_info"
          v-model:value="searchGoodsInfo"
        />
        <div class="search_button_box" @click="searchGoods">搜索</div>
      </div>
      <!-- 搜索历史 -->
      <div class="search_history"><ul v-if="searchHistoryArr.length !== 0">搜索历史：<li v-for="val, index in searchHistoryArr" :key="index">{{ val }}&nbsp</li></ul>
      </div>
    </div>
    <!-- 网站二维码 -->
    <div class="qrcode"></div>
  </div>
</template>

<script lang="ts" setup>
import { message } from "ant-design-vue";
import { onMounted, ref } from "vue-demi";
import { useRouter } from "vue-router";

// 搜索信息
let searchGoodsInfo = ref<string>("");
// 搜索历史数组
let searchHistoryArr = ref<string[]>([]);
// 路由实例化
const router = useRouter();

// 搜索货物
const searchGoods = (): void => {
  if (searchGoodsInfo.value === "") {
    message.error("请先输入要搜索的商品");
  } else {
    router.push({
      path: "/goodsSearchPage",
      query: {
        searchType: "宝贝",
        searchInfo: searchGoodsInfo.value,
      },
    });
    searchHistory();
  }
};

// 搜索历史
const searchHistory = (): void => {
  const history: any = localStorage.getItem("searchHistory");
  const historyArr: any = JSON.parse(history);
  if (history === null) {
    localStorage.setItem("searchHistory", "[]");
    searchHistoryArr.value = []
    return;
  } else if (searchGoodsInfo.value !== "") {
    // 添加搜索记录
    searchHistoryArr.value.push(searchGoodsInfo.value)
    historyArr.unshift(searchGoodsInfo.value);
    localStorage.setItem("searchHistory", JSON.stringify(historyArr));
  } else {
    searchHistoryArr.value = historyArr
  }
};

onMounted((): void => {
  searchHistory();
});
</script>

<style lang="less" scoped>
.search_content_box {
  width: 1200px;
  height: 100px;
  margin: 0px auto 10px auto;
  display: flex;
  justify-content: space-between;

  h1 {
    width: 170px;
    margin: 0;
    color: #ff5000;
    font-size: 40px;
    font-style: italic;
    line-height: 100px;
    text-align: center;
  }

  // 二维码
  .qrcode {
    width: 170px;
  }

  .search_box {
    width: 650px;
    padding-top: 34px;

    .search_container {
      width: 650px;
      border: 2px solid #ff5000;
      display: inline-block;
      height: 44px;
      border-radius: 20px;
      display: flex;
      background: #fff;

      .search_info {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        padding-left: 15px;
        font-size: 14px;
      }

      .search_button_box {
        width: 85px;
        background-image: linear-gradient(#ff9000, #ff5000 77%);
        border: 2px solid #fff;
        border-radius: 20px;
        text-align: center;
        line-height: 38px;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        font-family: "宋体";
        cursor: pointer;
      }
    }

    .search_history {
      color: #666666;
      font-size: 12px;
      margin-top: 5px;
      margin-left: 7px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
      ul {
        display: inline-block;
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
      }
    }
  }
}
</style>