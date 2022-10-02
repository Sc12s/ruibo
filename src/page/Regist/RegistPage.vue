<template>
    <NavHeadComp />
    <div class="regist_box">
        <!-- 注册头部组件 -->
        <registHead />
        <!-- 邮箱组件 -->
        <div class="reister_comp">
            <emailComp v-if="index===0" @click="receiveEmailVal" />
            <personalInfoComp v-else-if="index === 1" :email="email" @click="changeIndex" />
            <resultComp v-else @click="changeIndex" :status="registStatus" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity';
import NavHeadComp from '../../components/NavHeadComp.vue';
import emailComp from './registComponents/emailComp.vue';
import personalInfoComp from './registComponents/personalInfoComp.vue';
import registHead from './registComponents/registHead.vue';
import resultComp from './registComponents/resultComp.vue';
// 显示第几步
const index = ref<number>(0)
// 邮箱
const email = ref<string>()
// 注册状态
const registStatus = ref<string>()

// 邮件组件传过来的值
const receiveEmailVal = (val: string): void => {
    if (val) {
        email.value = val
        index.value = 1
    }
}
// 注册结果跳转
const changeIndex = (values: any): void => {
    registStatus.value = values.status
    index.value = 2
}

</script>

<style lang="less" scoped>
.regist_box {
    width: 1200px;
    margin: 0 auto;

    .reister_comp {
        width: 990px;
        margin: 0 auto;
    }
}
</style>