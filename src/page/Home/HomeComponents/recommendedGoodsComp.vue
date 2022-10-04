<template>
    <div class="goods_box">
        <!-- 猜你喜欢标题 -->
        <h1>猜你喜欢<span>个性推荐</span></h1>
        <ul class="goods_list">
            <!-- 商品盒子 -->
            <li v-for="item in loadingGoodsNums" :key="item.goods_id">
                <!-- 商品图片 -->
                <div class="goods_image">
                    <a-image :width="150" :height="150" :src="item.goods_image" :preview="false"
                        fallback="data:image/png;base64,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" />
                </div>
                <!-- 商品信息 -->
                <div class="goods_info">
                    <!-- 商品标题 -->
                    <p class="goods_title">
                        {{ item.goods_title }}
                    </p>
                    <div class="goods_warning">送运费险</div>
                    <!-- 商品价格 -->
                    <h3 class="goods_price"><span>￥</span>{{ item.goods_price }}</h3>
                </div>
            </li>
        </ul>
        <div class="isLoading_box" v-show="isLoading">
            <loading-outlined />
        </div>
        <div class="isNoDate_box" v-if="isNoDate">已没有新的数据</div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import { LoadingOutlined } from '@ant-design/icons-vue';
import { GOODS_LIST } from "../../../http/api/goodsApi";
import { message } from "ant-design-vue";


// 自定义无限加载
let loadingGoodsNums = ref<Array<any>>([])
// 加载动画
let isLoading = ref<boolean>(false)

// 监听商品总数
watch(loadingGoodsNums, (newVal): void => {
    loadingGoodsNums.value = newVal
})

// 监听滚动条是否触底
window.onscroll = (): void => {
    // 获取元素
    const dom = document.documentElement || document.body
    // 获取当前可视区域的内容高度
    const clientHeight: number = dom.clientHeight;
    // 滚动条在Y轴上的滚动距离
    const scrollTop: number = dom.scrollTop;
    // 内容可视区域的高度加上溢出（滚动）的距离
    const scrollHeight: number = dom.scrollHeight;
    // 判断滚动条是否触底
    if (clientHeight + scrollTop === scrollHeight) {
        // 触底开启加载动画
        isLoading.value = true
        setTimeout(() => (
            REMM_GOODS(),
            // 关闭加载动画
            isLoading.value = false
        ), 1000)
    }
}

// 分页查询开始和结束
const startNums = ref<number>(0)
const endNums = ref<number>(10)
// 是否显示无新数据提醒
const isNoDate = ref<boolean>(false)
// 推荐好物请求
const REMM_GOODS = async () => {
    const { data } = await GOODS_LIST({ params: { startNums: startNums.value, endNums: endNums.value } })
    if (data.status ===  'success') {
        startNums.value = endNums.value
        endNums.value +=5
        loadingGoodsNums.value = [...loadingGoodsNums.value, ...data.list]
    } else if (data.status === 'noNewDate') {
        isNoDate.value = true
        window.onscroll = null
    } else {
        message.error('请求错误，请重试！！！')
    }
}

onMounted(() => {
    REMM_GOODS()
})

</script>

<style lang="less" scoped>
.goods_box {
    width: 100%;
    min-width: 1150px;
    margin-top: 35px;

    h1 {
        font-family: "宋体";
        font-weight: 700;
        color: #111111;

        span {
            font-size: 14px;
            font-family: "微软雅黑";
            color: #fff;
            padding: 0 5px;
            margin: 0 5px;
            background-image: linear-gradient(to right, #ff9000, #ff5000 77%);
            border-radius: 3px;
            font-weight: lighter;
        }
    }

    .goods_list {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;

        li {
            width: 370px;
            height: 170px;
            border-radius: 12px;
            background: #f7f9fa;
            margin-bottom: 20px;
            cursor: pointer;
            padding: 10px;
            display: flex;
            border: 1px solid #f7f9fa;
            transition: all .5s;

            .goods_image {
                width: 150px;
                height: 150px;
                border-radius: 12px;
                overflow: hidden;
            }

            .goods_info {
                margin-left: 10px;
                width: calc(100% - 160px);

                // 商品名字
                .goods_title {
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden; //溢出内容隐藏
                    text-overflow: ellipsis; //文本溢出部分用省略号表示
                    display: -webkit-box; //特别显示模式
                    -webkit-line-clamp: 2; //行数
                    line-clamp: 2;
                    -webkit-box-orient: vertical; //盒子中内容竖直排列
                    font-size: 16px;
                    color: #333333;
                    font-weight: 500;
                    margin: 0;
                }

                .goods_title:hover {
                    color: #ff0036;
                }

                // 送运费险
                .goods_warning {
                    margin-top: 5px;
                    display: inline-block;
                    padding: 0 7px;
                    border: 1px solid #ff5000;
                    color: #ff0036;
                    background-color: #fff;
                    border-radius: 3px;
                    font-size: 12px;
                }

                // 商品价格样式
                .goods_price {
                    font-size: 24px;
                    color: #ff5000;
                    margin-top: 38px;

                    span {
                        font-size: 17px;
                    }
                }
            }
        }

        li:hover {
            background-color: #fff;
            border: 1px solid rgba(255, 144, 0, .5);
            box-shadow: 0 2px 12px 0 rgba(255, 144, 0, 0.2);
        }

        li:nth-child(3n+2) {
            margin: 0 20px;
        }
    }

    .isLoading_box {
        text-align: center;
        font-size: 35px;
        color: #ff5000;
    }
    .isNoDate_box {
        text-align: center;
    }
}
</style>