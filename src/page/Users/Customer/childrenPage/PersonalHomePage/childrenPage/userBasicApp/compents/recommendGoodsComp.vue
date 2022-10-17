<template>
  <!-- 账户设置页面 -->
  <div class="recommendGoods_box">
    <div class="title">好物推荐</div>
    <ul>
      <li v-for="val in randGoodsArr" :key="val.goods_id" @click="toGoGoods(val.goods_id)">
        <div class="goods_img">
          <img
            :src="val.goods_image"
            alt="商品图片"
          />
        </div>
        <div class="goodsName_price">
          <h3>{{ val.goods_price }}</h3>
          <p>{{ val.goods_title }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { message } from "ant-design-vue";
import { onMounted, ref } from "vue-demi";
import { useRouter } from "vue-router";
import { RAND_REMM_GOODS } from "../../../../../../../../http/api/goodsApi";

// 随机货物数组
const randGoodsArr = ref<any[]>([]);

// 货物随机推荐
const rand_goods_remm = async () => {
  const { data } = await RAND_REMM_GOODS();
  if (data.status === "error") {
    message.error("请求网络失败,请重试!!");
    return;
  }
  randGoodsArr.value = data.message;
};

// 路由方法实例化
const router = useRouter()
// 跳转货物详情页面
const toGoGoods = async (id: number) => {
    let link = router.resolve({
        name: 'GoodsDetailsPage',
        params: {
            id
        }
    })
    window.open(link.href, '_blank')
}

onMounted((): void => {
  rand_goods_remm();
});
</script>
  
<style lang="less" scoped>
.recommendGoods_box {
  width: 100%;
  margin-top: 20px;
  border: 1px solid #e4eaee;
  .title {
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    padding-left: 10px;
    color: #fff;
    background: #a0cdeb;
  }
  ul {
    margin: 0;
    padding: 10px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    li {
      width: calc(100% / 3 - 10px);
      border: 1px solid #e4eaee;
      margin: 5px;
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