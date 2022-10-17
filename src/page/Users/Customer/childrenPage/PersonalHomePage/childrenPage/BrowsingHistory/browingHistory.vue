<template>
  <div class="history_main_box">
    <div class="title">浏览历史</div>
    <ul>
      <li v-for="item in historyArr" @click="toGoGoods(item.goods_id)">
        <div class="goods_img">
          <img :src="item.goods_image" alt="商品图片" />
        </div>
        <div class="goodsName_price">
          <h3>{{ item.goods_price }}</h3>
          <p>{{ item.goods_title }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { message } from "ant-design-vue";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue-demi";
import { useRouter } from "vue-router";
import { GET_BROWING_HISTORY } from "../../../../../../../http/api/goodsApi";
// pinia导入
import { GlobalStore } from "../../../../../../../store/index";

// 初始化pinia
const store: any = GlobalStore();
let { userInfo } = storeToRefs<any>(store);

let historyArr = ref<any[]>([]);

const getHistory = async () => {
  const key = userInfo.value.uuid;
  // 发送请求
  const { data } = await GET_BROWING_HISTORY({ params: { key } });
  if (data.status === "error") {
    message.error(data.message);
    return;
  }
  historyArr.value = data.message;
};

// 路由方法实例化
const router = useRouter();
// 跳转货物详情页面
const toGoGoods = async (id: number) => {
  let link = router.resolve({
    name: "GoodsDetailsPage",
    params: {
      id,
    },
  });
  window.open(link.href, "_blank");
};

onMounted((): void => {
  getHistory();
});
</script>

<style lang="less" scoped>
.history_main_box {
  width: 100%;
  border: 1px solid #e4eaee;
  .title {
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    padding-left: 10px;
    color: #6c6c6c;
    background: #f5f8fa;
  }
  ul {
    width: 100%;
    padding: 10px;
    margin: 0;
    list-style-type: none;
    border: 1px solid #e4eaee;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    li {
      width: calc(100% / 3 - 10px);
      margin: 5px;
      border: 1px solid #e4eaee;
      cursor: pointer;
      .goods_img {
        width: 100%;
        aspect-ratio: 1 / 1;
        overflow: hidden;
        border-bottom: 1px solid #e4eaee;
        img {
          width: 100%;
          aspect-ratio: 1 / 1;
          transition: all 0.3s;
        }
      }
      .goodsName_price {
        padding: 10px;
        h3 {
          color: #ff4000;
          font-weight: 700;
          font-size: 16px;
        }
        p {
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
        }
      }
    }
    li:hover img {
      transform: scale(1.2);
    }
    li:hover p {
      color: #ff4000;
    }
  }
}
</style>