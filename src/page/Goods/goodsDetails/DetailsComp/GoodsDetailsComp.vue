<template>
    <ul class="goods_box">
        <!-- 轮播图 -->
        <li class="goods_image_box">
            <a-carousel arrows dots-class="slick-dots slick-thumb">
                <template #customPaging="props">
                    <a>
                        <img :src="getImgUrl(props.i)" />
                    </a>
                </template>
                <div v-for="item in 4" :key="item">
                    <img :src="getImgUrl(item - 1)" />
                </div>
            </a-carousel>
        </li>
        <!-- 右边详情 -->
        <li class="goods_parameter">
            <!-- 商品名称 -->
            <h1>{{ details.goods_title }}</h1>
            <!-- 商品价格 -->
            <p class="goods_price">
                惊喜促销￥
                <span>{{ details.goods_price }}</span>
                元
            </p>
            <!-- 活动提示框 -->
            <a-popover placement="bottomLeft">
                <template #content>
                    <div class="prompt_box">
                        <p>优惠：跨店每200减20，店铺券满100减5</p>
                        <p>活动：最多送50元，全店通用更划算</p>
                        <p>保障：假一赔四，极速退款，七天无理由退换</p>
                    </div>
                </template>
                <div class="active_prompt">
                    <span>优惠</span>
                    <span>活动</span>
                    <span>保障</span>
                </div>
            </a-popover>
            <!-- 配送地址 -->
            <div class="user_address">
                <div>
                    <span>配送：</span>
                    {{ store.userInfo.address ? store.userInfo.address : '请填写收获地址' }}
                </div>
                <div>快递：免运费</div>
            </div>
            <!-- 参数选择 -->
            <ul class="goods_size">
                <span>分类：</span>
                <li v-for="size, index in JSON.parse(details.goods_size)" :key="index" @click="selectSize(index, size)"
                    :class="selectDefault===index && 'selectAfterSize'">{{ size }}</li>
            </ul>
            <!-- 标签 -->
            <div class="goods_tags">
                <span class="tags_title">标签：</span>
                <a-tag color="#f50" v-for="tag, index in JSON.parse(details.goods_tags)" :key="index">{{ tag }}</a-tag>
            </div>
            <!-- 购买的商品数量 -->
            <div class="goods_nums">
                <span class="nums_title">数量：</span>
                <a-input-number v-model:value="buy_goods_info.goods_nums" :min="1" :max="details.goods_nums*1">
                </a-input-number>
            </div>
            <ul class="goods_btns">
                <li>购买商品</li>
                <li @click="add_goods_car">加入购物车</li>
            </ul>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { message } from "ant-design-vue";
import { reactive, ref, toRefs } from "vue-demi";
import { ADD_GOODS_CAR } from "../../../../http/api/goodsApi";
// pinia导入
import { GlobalStore } from '../../../../store/index';
// 全局方法实例化
const store: any = GlobalStore()
const { uuid } = toRefs(store)

// 接收父组件传过来的值
const props = defineProps({
    details: Object
})


// 转存数据
const details = ref<any>(props.details)

const baseUrl = 'https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/';
const getImgUrl = (i: number) => {
    return `${baseUrl}abstract0${i + 1}.jpg`;
};



// 购买商品信息
const buy_goods_info = reactive({
    goods_id: details.value.goods_id,
    goods_image: details.value.goods_image,
    goods_title: details.value.goods_title,
    goods_price: details.value.goods_price,
    goods_merchants: details.value.goods_merchants,
    goods_size: '',
    goods_nums: 1
})

// 默认选择
const selectDefault = ref<number | null>(null)

// 选择商品参数
const selectSize = (index: number, size: string) => {
    selectDefault.value = index
    buy_goods_info.goods_size = size
}

// 添加购物车网络请求
const addGoodsCarHttp = async () => {  
    const userGoodsCarId = uuid.value
    const { data } = await ADD_GOODS_CAR({
        goodsCarId: userGoodsCarId,
        goodsInfo: JSON.stringify(buy_goods_info)
    })
    if (data.status === 'error') {
        return message.error(data.message)
    }
    message.success(data.message)
}

// 添加购物车
const add_goods_car = () => {
    if (buy_goods_info.goods_size === '') {
        message.error('加入购物车失败,请选择商品分类')
    } else {
        addGoodsCarHttp()
    }
}

</script>

<style lang="less" scoped>
.goods_box {
    width: 100%;
    list-style-type: none;
    padding: 0;
    display: flex;

    // 轮播图
    .goods_image_box {
        width: 450px;
        height: 530px;
        border-radius: 24px;

        .ant-carousel :deep(.slick-slide) {
            width: 450px;
            height: 450px;
            background: #f7f9fa;
            border-radius: 24px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .ant-carousel :deep(.slick-dots) {
            margin: 15px;
            position: relative;
            height: auto;

            li {
                margin: 0 10px;
            }
        }

        .ant-carousel :deep(.slick-slide img) {
            border: 5px solid #fff;
            display: block;
            margin: auto;
            max-width: 80%;
            border-radius: 24px;
        }

        .ant-carousel :deep(.slick-arrow) {
            display: none !important;
        }

        .ant-carousel :deep(.slick-thumb) {
            bottom: 0px;
        }

        .ant-carousel :deep(.slick-thumb li) {
            width: 60px;
            height: 45px;
        }

        .ant-carousel :deep(.slick-thumb li img) {
            width: 100%;
            height: 100%;
            filter: grayscale(100%);
            display: block;
        }

        .ant-carousel :deep .slick-thumb li.slick-active img {
            filter: grayscale(0%);
        }
    }

    .goods_parameter {
        width: 100%;
        padding-left: 20px;

        h1 {
            font-size: 20px;
            font-weight: 900;
        }

        .goods_price {
            color: #ff4f00;
            font-size: 12px;

            span {
                font-size: 28px;
                font-weight: 700;
            }
        }

        .active_prompt {
            height: 42px;
            border: 1px solid #eee;
            display: inline-block;
            border-radius: 21px;
            padding: 11px 20px;
            cursor: pointer;
            transition: all .5s;

            span:nth-child(1) {
                padding-right: 10px;
            }

            span:nth-child(2) {
                border-left: 1px solid #eee;
                border-right: 1px solid #eee;
                padding: 0 10px;
            }

            span:nth-child(3) {
                padding-left: 10px;
            }
        }

        .prompt_box {
            color: #4E4E4E;
        }

        .active_prompt:hover {
            color: #ff4f00;
            background: #eee;
        }

        .user_address {
            margin: 20px 0;

            div {
                span {
                    color: #7F7F7F;
                    padding-right: 20px;
                }
            }

            div:nth-child(2) {
                margin-left: 62px;
            }

        }

        .goods_size {
            padding: 0;
            list-style-type: none;
            display: flex;
            flex-wrap: wrap;

            span {
                color: #7F7F7F;
                width: 63px;
                height: 34px;
                line-height: 34px;
            }

            li {
                border: 1px solid #eee;
                padding: 5px 15px;
                border-radius: 3px;
                cursor: pointer;
                margin: 0 10px 25px 0px;
            }
        }

        .goods_tags {
            .tags_title {
                width: 62px;
                display: inline-block;
                color: #7F7F7F;
            }

            .ant-tag {
                margin-bottom: 15px;
            }
        }

        .goods_nums {
            margin-top: 10px;

            .nums_title {
                width: 62px;
                display: inline-block;
                color: #7F7F7F;
                height: 32px;
                line-height: 32px;
            }
        }

        .goods_btns {
            width: 288px;
            height: 48px;
            border-radius: 24px;
            display: flex;
            overflow: hidden;
            list-style-type: none;
            border: 1px solid red;
            padding: 0;
            margin: 25px 0;
            border: 1px solid #eee;

            li {
                width: 50%;
                height: 100%;
                text-align: center;
                line-height: 48px;
                font-size: 16px;
                color: #fff;
                font-weight: 900;
                font-family: "宋体";
                cursor: pointer;
            }

            li:nth-child(1) {
                background: linear-gradient(90deg, rgb(255, 119, 0), rgb(255, 73, 0));
                box-shadow: rgb(255 119 0 / 20%) 0px 9px 13px 0px;
            }

            li:nth-child(2) {
                background: linear-gradient(90deg, rgb(255, 203, 0), rgb(255, 148, 2));
                box-shadow: rgb(255 203 0 / 20%) 0px 9px 13px 0px;
            }
        }
    }

    // 选择后的默认样式
    .selectAfterSize {
        background: #ff5000;
        color: #f7f9fa;
    }
}
</style>