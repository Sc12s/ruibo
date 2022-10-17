<template>
  <div class="addaress_container">
    <div class="title">我的收货地址</div>
    <div class="address_list">
      <a-radio-group v-model:value="addressVal">
        <a-radio v-for="item, index in addressArr" :key="index" :value="index">
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
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue-demi";
// 导入pinia
import { GlobalStore } from '../../../../../../../store/index'
let store = GlobalStore()
let { userInfo } = storeToRefs<any>(store)

// 单选框
// 默认选中
let addressVal = ref<number>();
// 全部地址
let addressArr = ref<any[]>([])

// 给地址和全部地址赋值
const setAddressVal = () => {
    let newAddressArr = JSON.parse(userInfo.value.addressarr)   
    const index = newAddressArr.findIndex((item:any) => JSON.stringify(item) === userInfo.value.address )
    addressVal.value = index
    addressArr.value = newAddressArr
}

onMounted(() => {
    setAddressVal()
})



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