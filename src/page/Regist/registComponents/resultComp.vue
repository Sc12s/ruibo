<template>
    <a-result status="success" title="注册成功" sub-title="注册成功，2秒后即将自动跳转登录页面，如没反应请点击下方按钮" v-if="props.status === 'success'">
        <template #extra>
            <a-button type="primary" @click="pushPage('/loginPage')">前往登录页面</a-button>
        </template>
    </a-result>
    <a-result status="error" title="注册失败" sub-title="注册失败，2秒后即将重新返回注册页面，如没反应请点击下方按钮" v-else>
        <template #extra>
            <a-button type="primary" danger @click="pushPage('/registPage')">前往注册页面</a-button>
        </template>
    </a-result>
</template>
<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from "@vue/runtime-core"
import { useRouter } from "vue-router"

const props = defineProps({
    status: String
})
const router = useRouter()

const pushPage = (path: string) => {
    router.push(path)
}

let timer: any = null

onMounted(() => {
    if (props.status === 'success') {
        timer = setTimeout(()=>{
            router.push('/loginPage')
        }, 2000)
    } else {
        timer = setTimeout(()=>{
            location.reload();
        }, 2000)
    }
})

onBeforeUnmount(() => {
    clearTimeout(timer)
})

</script>

<style lang="less" scoped>
.ant-result {
    margin-top: 100px;
}
</style>
