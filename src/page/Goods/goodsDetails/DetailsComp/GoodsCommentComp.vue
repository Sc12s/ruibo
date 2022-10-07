<template>
    <div class="comment_box">
        <div class="comment_title">
            <span class="comment_span">宝贝评价</span>
        </div>
        <div class="comments_Info">
            <template v-if="commentsVal.length===0">
                <div class="noCommentsPrompt">
                    该宝贝暂时没有任何评价
                </div>
            </template>
            <template v-else>
                <div v-for="comment, index in commentsVal" :key="index" class="comment_self_box">
                    <div>
                        <a-avatar src="https://joeschmoe.io/api/v1/random" />
                    </div>
                    <ul>
                        <li>匿名用户</li>
                        <li>{{ comment }}</li>
                    </ul>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue-demi"

// 接收参数
const props = defineProps({
    comments: Object
})

// 评论
let comments: any = props.comments
let commentsVal = reactive(JSON.parse(comments.value.goods_comments))



</script>

<style lang="less" scoped>
.comment_box {
    width: 100%;

    .comment_title {
        height: 72px;
        border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);

        .comment_span {
            font-weight: 700px;
            font-size: 18px;
            padding: 22px 18px;
            display: inline-block;
            position: relative;
        }

        .comment_span::after {
            content: '';
            position: absolute;
            bottom: 15px;
            left: 50%;
            transform: translate(-50%);
            width: 20px;
            height: 3px;
            background: #ff5000;
        }

    }

    .comments_Info {
        padding: 0;
        margin: 0;
        list-style-type: none;

        .noCommentsPrompt {
            height: 300px;
            text-align: center;
            line-height: 300px;
        }

        .comment_self_box {
            margin: 15px;
            display: flex;
            transition: all .5s;
            cursor: pointer;
            border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);
            ul {
                list-style-type: none;
                margin: 0 0 10px 0;
                padding: 0 0 0 10px;
                li:nth-child(1) {
                    font-size: 13px;
                }
            }
        }
    }
}
</style>