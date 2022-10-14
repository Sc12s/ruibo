<template>
    <div class="container_gdsCar">
        <NavHead />
        <!-- 购物车搜索 -->
        <GoodsCarSearchComp />
        <div class="goods_list_box">
            <div class="car_title">
                <span>购物车（全部{{ newGoodsNums }}件）</span>
                <span>已选商品（含运费）<span>{{ selectGoodsPrice }}</span>元<a-button type="primary" danger shape="round">结算
                    </a-button></span>
            </div>
            <ul class="goods_list">
                <div class="title">
                    <span @click="allSelect">全选/反选</span>
                    <span>商品信息</span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>总金额</span>
                    <span>操作</span>
                </div>
                <template v-if='typeof goods_data.value !== "object" '>
                    <a-empty description="您的购物车为空,请添加将您喜欢的商品加入购物车" />
                </template>
                <template v-else>
                    <a-checkbox-group v-model:value="selectValue" @change="selectGoodsChange">
                        <li v-for="item, keys in newGoodsData" :key="keys">
                            <div class="store_name"><span>店铺：</span>{{ keys }}</div>
                            <div class="goods_info_box">
                                <a-checkbox v-for="val, index in item" :key="index" :value="val">
                                    <div class="goods_box">
                                        <!-- 商品图片 -->
                                        <div class="goods_image_box">
                                            <img :src="val.goods_image" alt="商品图片" />
                                        </div>
                                        <!-- 商品信息 -->
                                        <div class="goods_title_box">{{ val.goods_title }}</div>
                                        <div class="goods_size_box">商品分类：{{ val.goods_size }}</div>
                                        <div class="goods_price_box">￥{{ val.goods_price }}</div>
                                        <div class="goods_nums_box">数量：{{val.goods_nums}}</div>
                                        <div class="goods_all_price_box">￥{{ val.goods_all_price }}</div>
                                        <!-- 操作按钮 -->
                                        <div class="goods_operation_box">
                                            <a-button type="link">修改</a-button>
                                            <a-popconfirm title="是否删除当前商品?" ok-text="确定删除"
                                                cancel-text="取消" @confirm="confirmDele(keys, val)">
                                                <a-button type="link">删除</a-button>
                                            </a-popconfirm>
                                        </div>
                                    </div>
                                </a-checkbox>
                            </div>
                        </li>
                    </a-checkbox-group>
                </template>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
// pinia导入
import { computed, onMounted, reactive, ref, toRefs } from 'vue-demi';
import { GET_GOODS_CAR_LIST } from '../../../http/api/goodsApi';
import { GlobalStore } from '../../../store';
import NavHead from '../../../components/NavHeadComp.vue'
import GoodsCarSearchComp from './goodsCarComp/GoodsCarSearchComp.vue';
import { message } from 'ant-design-vue';


// 全局方法实例化
const store: any = GlobalStore()
const { uuid } = toRefs(store)
let goods_data = reactive<any>({})
// 选择那些商品
let selectValue = ref<object[]>([])

// 删除单件商品
const confirmDele = (keysNmae: number, value: object) => {
    goods_data.value[keysNmae].forEach((item: object, index: number) => {
        if (JSON.stringify(item) === JSON.stringify(value)) {
            goods_data.value[keysNmae].splice(index, 1)
        }
    })
}

// 获取购物车列表信息
const getGoodsCarList = async () => {
    const { data } = await GET_GOODS_CAR_LIST({ uuid: uuid.value })
    if (data.status === 'success') {
        goods_data.value = data.message
        console.log(data.message);
    } else {
        message.error('获取购物车信息失败,请重试!!')
    }
}

// 计算每件商品的总价
const newGoodsData = computed(() => {
    let goodsList = goods_data.value
    for (const key in goodsList) {
        goodsList[key].forEach((item: any) => {
            item.goods_all_price = (item.goods_nums * item.goods_price).toFixed(2)
        })
    }
    return goodsList
})

// 计算商品总数量
const newGoodsNums = computed(() => {
    let goodsList = goods_data.value
    let nums = 0
    for (const key in goodsList) {
        goodsList[key].map((item: any) => {
            nums = nums + item.goods_nums
        })
    }
    return nums
})


// 选中商品后改变
const selectGoodsChange = () => {
}
// 计算选中商品的总价
const selectGoodsPrice = computed(() => {
    let gdsPrice = 0
    selectValue.value.map((item: any) => {
        gdsPrice = gdsPrice + (item.goods_nums * item.goods_price)
    })
    return gdsPrice.toFixed(2)
})

// 全选按钮
// 统计点击次数
let clickNums: number = 0
const allSelect = () => {
    selectValue.value = []
    clickNums++
    // 反选
    if (clickNums % 2 == 0) {
        selectValue.value = []
        return;
    }
    // 全选
    const keysArr = Object.keys(goods_data.value)
    keysArr.map((item: string) => {
        goods_data.value[item].map((val: any) => {
            selectValue.value.push(val)
        })
    })
}

onMounted(() => {
    getGoodsCarList()
})

</script>

<style lang="less" scoped>
.container_gdsCar {
    background-image: linear-gradient(to left, #ecf5ff, #fef0f0);
    padding-bottom: 24px;

    .goods_list_box {
        width: 990px;
        margin: 0px auto;
        border-radius: 24px;
        background-color: #fff;

        .title {
            width: 100%;
            height: 50px;
            line-height: 50px;
            padding: 0 10px;

            span {
                display: inline-block;
                font-weight: 600;
            }

            span:nth-child(1) {
                width: 114px;
                color: #ff5000;
                cursor: pointer;
            }

            span:nth-child(2) {
                width: 370px;
            }

            span:nth-child(3) {
                width: 120px;
            }

            span:nth-child(4) {
                width: 105px;
            }

            span:nth-child(5) {
                width: 105px;
            }

            span:nth-child(6) {
                padding-left: 15px;
            }
        }

        .car_title {
            width: 100%;
            height: 73px;
            border-bottom: 1px solid #e6e6e6;
            padding: 0 18px;
            display: flex;
            justify-content: flex-start;

            span {
                display: inline-block;
                height: 100%;
                line-height: 73px;
            }

            span:nth-child(1) {
                font-size: 18px;
                font-family: "宋体";
                font-weight: 600;
                margin-right: auto;
            }

            span:nth-child(2) {
                span {
                    color: #ff5000;
                    font-weight: 700;
                    font-size: 20px;
                }

                .ant-btn {
                    margin-left: 10px;
                }
            }
        }

        .goods_list {
            list-style: none;
            padding: 18px;
            margin: 0;

            .ant-checkbox-group {
                width: 100%;

                // 商品框
                li {

                    // 店铺名字
                    .store_name {
                        span {
                            color: black;
                        }

                        color: #3c3c3c;
                    }

                    // 商品具体信息框
                    .goods_info_box {
                        margin: 14px 0;
                        border-radius: 24px;
                        background: #f7f9fa;
                        padding: 10px;

                        .ant-checkbox-wrapper {
                            width: 100%;
                            margin: 10px 0;
                            display: inline-flex;
                            align-items: center;

                            .goods_box {
                                width: 908px;
                                height: 80px;
                                display: flex;

                                // 商品图片
                                div {
                                    height: 80px;
                                }

                                .goods_image_box {
                                    width: 80px;

                                    img {
                                        width: 80px;
                                        height: 80px;
                                    }
                                }

                                // 商品标题
                                .goods_title_box {
                                    width: 200px;
                                    font-size: 12px;
                                    color: #3c3c3c;
                                    padding: 0 10px;
                                    text-overflow: -o-ellipsis-lastline;
                                    overflow: hidden; //溢出内容隐藏
                                    text-overflow: ellipsis; //文本溢出部分用省略号表示
                                    display: -webkit-box; //特别显示模式
                                    -webkit-line-clamp: 7; //行数
                                    line-clamp: 7;
                                    -webkit-box-orient: vertical; //盒子中内容竖直排列
                                }

                                // 商品分类
                                .goods_size_box {
                                    width: 180px;
                                    padding: 0 10px;
                                    color: #9c9c9c;
                                }

                                // 商品价格
                                .goods_price_box {
                                    width: 120px;
                                    color: #3c3c3c;
                                    font-weight: 700;
                                }

                                .goods_nums_box {
                                    width: 105px;
                                    color: #9c9c9c;
                                }

                                .goods_all_price_box {
                                    width: 105px;
                                    color: #ff5000;
                                    font-weight: 700;
                                }
                            }
                        }
                    }

                }
            }
        }
    }
}
</style>