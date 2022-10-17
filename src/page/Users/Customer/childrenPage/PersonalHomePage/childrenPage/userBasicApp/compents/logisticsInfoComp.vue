<template>
  <div class="logistics_box">
    <!-- 物流标题 -->
    <div class="title"><unordered-list-outlined /> 我的物流</div>
    <!-- 物流列表 -->
    <ul class="list">
      <li v-for="index in 1" @click="logistQuery(index)">
        <img
          src="http://127.0.0.1:3000/image/avater/1624370923419.png"
          alt="商品图片"
        />
        <div class="logistics_status">
          <p>等待揽收中</p>
          <p>2022-10-16 10:36:47</p>
        </div>
      </li>
    </ul>
  </div>
  <!-- 抽屉 -->
  <a-drawer v-model:visible="visible" title="物流状态查询" placement="right">
    <!-- 物流时间轴 -->
    <a-timeline>
      <a-timeline-item>
        <div class="haveInfo">
          <p>包裹打包中</p>
          <p>2015-09-01</p>
        </div>
        <div>
            暂时没有物流信息
        </div>
      </a-timeline-item>
    </a-timeline>
  </a-drawer>
</template>

<script setup lang="ts">
// 图标导入
import { UnorderedListOutlined } from "@ant-design/icons-vue";
import { ref } from "vue-demi";

// 快递物流数据
const courierList = ref<object[]>([]);
// 抽屉显示(物流查询)
const visible = ref<boolean>(false);

// 抽屉显示
const logistQuery = (values: any) => {
  visible.value = true;
  console.log(values);
};
</script>

<style lang="less" scoped>
.logistics_box {
  width: 100%;
  border: 1px solid #e4eaee;
  margin-top: 20px;
  // 标题
  .title {
    width: 100%;
    height: 45px;
    background: #f5f8fa;
    padding-left: 10px;
    line-height: 45px;
    font-size: 15px;
    color: #546d7e;
    border-bottom: 1px solid #e4eaee;
  }
  // 物流列表
  .list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    background: #fff;
    // 物流具体信息
    li {
      color: #4b4b4b;
      font-size: 12px;
      padding: 10px 10px;
      border-bottom: 1px solid #e4eaee;
      cursor: pointer;
      display: flex;
      // 商品图片
      img {
        width: 70px;
        height: 70px;
      }
      // 物流的更新事件以及状态
      .logistics_status {
        margin-left: 10px;
        width: 608px;
        display: flex;
        flex-wrap: wrap;
        p {
          padding: 0;
          margin: 0;
          width: 608px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
          line-height: 35px;
        }
      }
    }
    li:hover {
      color: #ff5000;
    }
    // li盒子最后一个没有边框
    li:last-child {
      border-bottom: 0px;
    }
  }
}
// 时间轴
.ant-timeline-item-content {
  .haveInfo {
    p {
      margin: 0;
    }
    p:nth-child(2) {
      font-size: 12px;
      color: #8f8f8f;
    }
  }
}
</style>