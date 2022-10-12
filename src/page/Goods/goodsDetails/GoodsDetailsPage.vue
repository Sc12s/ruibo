<template>
    <div class="goods_content_box">
        <!-- 顶部状态栏 -->
        <NavHeadComp />
        <!-- 店铺名 -->
        <ul class="store_name_box">
            <li>
                <a-avatar :size="56" src="http://localhost:3000/image/selflogo/%E5%95%86%E5%BA%97.png"></a-avatar>
            </li>
            <li>
                <!-- {{ goods_merchants === '自营' ? '瑞博自营店' : goods_merchants }} -->
            </li>
            <li><i class="iconfont icon-kefu"></i>联系客服</li>
        </ul>
        <div class="goods_details_box">
            <!-- 异步加载详情组件 -->
            <Suspense>
                <template #default>
                    <GoodsDetailsComp :details="goods_details.value" />
                </template>
                <template #fallback>
                    <div style="text-align:center; height: 400px;line-height: 400px;">
                        <a-spin tip="加载中，请稍后！！！"></a-spin>
                    </div>
                </template>
            </Suspense>
            <Suspense>
                <template #default>
                    <GoodsCommentComp :comments="goods_details" />
                </template>
                <template #fallback>
                    <div style="text-align:center; height: 400px;line-height: 400px;">
                        <a-spin tip="加载中，请稍后！！！"></a-spin>
                    </div>
                </template>
            </Suspense>
        </div>
    </div>


</template>

<script lang="ts" setup>
// 图标导入
import '../../Home/HomeComponents/icon/alibaba/icon.css'
import { message } from "ant-design-vue";
import { defineAsyncComponent, onMounted, reactive } from "vue-demi";
import { useRoute, useRouter } from "vue-router";
import NavHeadComp from "../../../components/NavHeadComp.vue";
import { GOODS_DETAILS } from "../../../http/api/goodsApi";
// 异步加载货物详情组件
// import GoodsDetailsComp from './DetailsComp/GoodsDetailsComp.vue'
const GoodsDetailsComp = defineAsyncComponent(() => import('./DetailsComp/GoodsDetailsComp.vue'));
// 异步加载评论详情组件
const GoodsCommentComp = defineAsyncComponent(() => import('./DetailsComp/goodsCommentComp.vue'))

// 实例化路由
const route = useRoute()
const goods_id = route.params.id

// 商品详情
const goods_details = reactive<any>({})


// 根据goods_id查询商品
const goodsDetails = async () => {
    const { data } = await GOODS_DETAILS({ params: { id: goods_id } })
    if (data.status === 'success') {
        goods_details.value = { ...data.goodsdatils }
        // 修改状态栏标题
        document.title = goods_details.value.goods_title
    } else {
        message.error('发生未知错误，请重试！')
    }
}

onMounted(() => {
    goodsDetails()
})



</script>

<style lang="less" scoped>
.goods_content_box {
    background: rgb(233, 222, 216);
    padding-bottom: 24px;
    .store_name_box {
        width: 1200px;
        height: 80px;
        margin: 15px auto;
        border-radius: 40px;
        background: #fff;
        padding: 12px;
        list-style-type: none;
        display: flex;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        justify-content: flex-start;

        li {
            height: 56px;
            line-height: 56px;
        }
        li:nth-child(2) {
            padding: 0 7px;
            font-size: 18px;
            font-weight: bold;
        }
        li:nth-child(3) {
            margin-left: auto;
            border: 1px solid #eee;
            width: 100px;
            height: 36px;
            line-height: 36px;
            border-radius: 18px;
            text-align: center;
            padding: 0 10px;
            margin-top: 10px;
            margin-right: 15px;
            cursor: pointer;
            .icon-kefu {
                margin-right: 5px;
            }
        }
        li:nth-child(3):hover {
            background: #eee;
        }
    }

    .goods_details_box {
        width: 1200px;
        // height: 700px;
        margin: 15px auto;
        padding: 12px;
        border-radius: 24px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        background: #fff;
        overflow: hidden;
    }
}
</style>