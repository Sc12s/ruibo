<template>
    <div class="search_container">
        <ul class="search_input">
            <li><router-link to="/">ruibo</router-link></li>
            <li>
                <!-- <select v-model="selectSearchType" class="select_box" @change="changeSelect">
                    <option value="宝贝">宝贝</option>
                    <option value="店铺">店铺</option>
                </select> -->
                <a-select v-model:value="selectSearchType" :bordered="false">
                    <a-select-option value="宝贝">宝贝</a-select-option>
                    <a-select-option value="店铺">店铺</a-select-option>
                    
                </a-select>
                <input type="text" class="searchinfo_box" v-model="searchInfo">
                <button class="search_btn" @click="searchGoods">搜 索</button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";
import { useRouter } from "vue-router";

// 初始化自定义事件
const emits = defineEmits(['click'])

// 搜索店铺还是商品
let selectSearchType = ref<string>('宝贝')
// 要搜索的内容
let searchInfo = ref<string>('')

// 路由初始化
const router = useRouter()

const searchGoods = () => {
    router.push({
        path: '/goodsSearchPage',
        query: {
            SearchType: selectSearchType.value,
            searchInfo: searchInfo.value
        }
    })
    emits('click') // SearchType.value, searchInfo.value
}


</script>

<style lang="less" scoped>
.search_container {
    width: 100%;
    min-width: 1200px;
    height: 60px;
    margin: 20px 0;

    .search_input {
        width: 1200px;
        height: 100%;
        padding: 0;
        margin: 0px auto;
        list-style-type: none;
        display: flex;
        align-items: center;

        li:nth-child(1) {
            width: 195px;
            color: #FF5000;
            font-size: 40px;
            font-style: italic;
            font-weight: 700;
            line-height: 60px;
            cursor: pointer;
            a {
                color: #FF5000;
                text-decoration: none;
            }
        }

        li:nth-child(2) {
            width: 810px;
            height: 35px;
            border: 2px solid #f50;

            .ant-select {
                width: 70px;
                height: 100%;
                background: #f5f5f5;
                color: #6b6b6b;
            }

            .searchinfo_box {
                width: 656px;
                height: 100%;
                border: 0;
                outline: none;
                padding-left: 10px;
            }

            .searchinfo_box:focus {
                outline: none;
            }

            .search_btn {
                width: 80px;
                height: 100%;
                background: #f50;
                border: 0;
                color: #ffff;
                font-weight: 700;
                font-size: 15px;
                cursor: pointer;
            }
        }
    }
}
</style>