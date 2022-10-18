<template>
  <div class="addaress_container">
    <div class="title">我的收货地址</div>
    <!-- 全部地址 -->
    <div class="address_list">
      <a-button block @click="showModal">添加地址</a-button>
      <a-radio-group v-model:value="addressVal">
        <a-radio
          v-for="(item, index) in addressArr"
          :key="index"
          :value="index"
        >
          <div class="address_info">
            <div class="nameAbout">
              <div class="name">{{ item.name }}</div>
              <div class="mobile">{{ item.mobile }}</div>
            </div>
            <div class="addressAbout">{{ item.address }}</div>
          </div>
        </a-radio>
      </a-radio-group>
    </div>
    <!-- 添加地址对话框 -->
    <a-modal
      v-model:visible="visibleAddAddress"
      title="添加地址"
      :footer="null"
      :body-style="{
        padding: '24px 24px 10px 24px',
      }"
    >
      <a-form :model="addressInfo" @finish="onFinish" :label-col="{ span: 4 }">
        <!-- 大概地址 -->
        <a-form-item
          label="大概地址"
          name="probablyAddress"
          :rules="[{ required: true, message: '请选择大概地址！' }]"
        >
          <a-cascader
            v-model:value="addressInfo.probablyAddress"
            :options="cityData"
            placeholder="请选择详细地址"
          />
        </a-form-item>
        <!-- 详细地址 -->
        <a-form-item
          label="详细地址"
          name="detailsAddress"
          :rules="[{ required: true, message: '请输入详细地址！' }]"
        >
          <a-textarea
            v-model:value="addressInfo.detailsAddress"
            placeholder="详细地址"
          ></a-textarea>
        </a-form-item>
        <!-- 姓名 -->
        <a-form-item
          label="姓名"
          name="name"
          :rules="[{ required: true, message: '请输入姓名！' }]"
        >
          <a-input
            v-model:value="addressInfo.name"
            placeholder="姓名"
          ></a-input>
        </a-form-item>
        <!-- 手机号 -->
        <a-form-item
          label="手机号"
          name="mobile"
          :rules="[{ required: true, message: '请输入手机号！' }]"
        >
          <a-input v-model:value="addressInfo.mobile" placeholder="手机号" />
        </a-form-item>
        <!-- 确定取消按钮 -->
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            style="width: calc(50% - 10px); margin-right: 10px"
            >确定</a-button
          >
          <a-button
            type="primary"
            danger
            style="width: calc(50% - 10px); margin-left: 10px"
            @click="closeModel"
            >取消
          </a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue-demi";
// 城市信息导入
import cityData from "./citydata.js";
import { message } from "ant-design-vue";
import {
  GET_ADDRESS,
  SET_ADDRESS,
} from "../../../../../../../http/api/accountApi.js";
// pinia导入
import { GlobalStore } from "../../../../../../../store/index";
import { storeToRefs } from "pinia";
const store = GlobalStore();
const { userInfo } = storeToRefs<any>(store);

// 单选框
// 默认选中
let addressVal = ref<number>();
// 全部地址
let addressArr = ref<any[]>([]);

// 地址信息
const addressInfo = reactive<any>({
  name: "",
  mobile: "",
  probablyAddress: "",
  detailsAddress: "",
});

// 添加地址
let visibleAddAddress = ref<boolean>(false);
// 显示
const showModal = () => {
  visibleAddAddress.value = true;
};
// 对话框确定
const onFinish = async () => {
  // 详细地址
  let addressStr = "";
  // 地址拼接
  addressInfo.probablyAddress.map((item: any) => {
    addressStr = addressStr + item;
  });
  // 地址信息汇总
  let addressObj = {
    name: addressInfo.name,
    mobile: addressInfo.mobile,
    address: addressStr + addressInfo.detailsAddress,
  }
  // 设置地址网络请求
  
  const { data } = await SET_ADDRESS({
    uuid: userInfo.value.uuid,
    address: addressObj,
    addressArr: addressArr.value
  });
  console.log(data);

  // 关闭弹窗
  visibleAddAddress.value = false;
};

// 添加地址网络请求

// 关闭对话框
const closeModel = () => {
  visibleAddAddress.value = false;
};

// 给地址和全部地址赋值
const setAddressVal = async () => {
  const uuid = userInfo.value.uuid;
  const { data } = await GET_ADDRESS({ params: { uuid } });
  if (data.status === "error") {
    message.error(data.message);
    return;
  } else {
    let { address, addressarr } = data.message;
    // 获取账号所填地址
    // 当账号没有任何地址的时候自定弹出添加地址窗口
    if (address === "" || addressarr === "") {
      visibleAddAddress.value = true;
      message.warning("请添加您的收货地址");
    } else {
      // 当有地址存在的时候，处理数据
      let newAddressArr = JSON.parse(addressarr);
      const index = newAddressArr.findIndex(
        (item: any) => JSON.stringify(item) === userInfo.value.address
      );
      addressVal.value = index;
      addressArr.value = newAddressArr;
    }
  }
};

onMounted(() => {
  setAddressVal();
});
</script>

<style lang="less" scoped>
.addaress_container {
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #e4eaee;

  .title {
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    padding-left: 10px;
    color: #6c6c6c;
    background: #f5f8fa;
  }

  .address_list {
    padding: 15px;
    list-style-type: none;
    background: #fff;

    .ant_button {
      width: 100%;
    }

    .ant-radio-group {
      width: 100%;

      .ant-radio-wrapper {
        width: 100%;
        border-bottom: 1px solid #e4eaee;
        align-items: center;

        .address_info {
          margin: 15px 0px 15px 10px;

          .nameAbout {
            display: flex;

            .name {
              margin-right: 30px;
            }
          }

          .addressAbout {
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>