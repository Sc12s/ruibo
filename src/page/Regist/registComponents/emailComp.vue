<template>
    <div class="regist_eamil_box">
        <!-- 邮箱登录表单 -->
        <div class="email_login_method">
            <a-form :model="emailLoginMethod" name="basic" autocomplete="off" :rules="rules"
                @finish="onPasswordLoginFinish" @finishFailed="onPasswordLoginFinishFailed">
                <a-form-item name="email">
                    <a-input v-model:value="emailLoginMethod.email" size="large" placeholder="请输入要注册的邮箱">
                        <template #prefix>
                            <mail-outlined />
                        </template>
                    </a-input>
                </a-form-item>

                <a-form-item name="code">
                    <a-input v-model:value="emailLoginMethod.code" size="large" placeholder="验证码">
                        <template #prefix>
                            <safety-certificate-outlined />
                        </template>
                        <template #addonAfter>
                            <div class="sendCode" ref="sendcode" @click="getCode">获取验证码</div>
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" size="large">下一步</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { MailOutlined, SafetyCertificateOutlined } from '@ant-design/icons-vue';
import { reactive, ref } from "@vue/reactivity"
import { message } from "ant-design-vue";
import type { Rule } from 'ant-design-vue/es/form';
import { SEND_EMAIL_CODE, CHECK_EMAIL_CODE } from '../../../http/api/emailApi'


// 邮箱验证
const emailValidatePass = async (_rule: Rule, value: string) => {
    if (value === '') {
        return Promise.reject('请输入邮箱');
    } else {
        // 邮箱正则验证
        var reg = /^\w+@[a-z0-9]+.[a-z]{2,4}$/i
        if (reg.test(emailLoginMethod.email)) {
            return Promise.resolve();
        } else {
            return Promise.reject('请输入正确的邮箱');
        }
        return Promise.resolve();
    }
}
// 验证码验证
const codeValidatePass = async (_rule: Rule, value: string) => {
    if (value === '') {
        return Promise.reject('请输入验证码');
    } else {
        // 邮箱正则验证
        var reg = /[0-9]{6}$/i
        if (reg.test(emailLoginMethod.code)) {
            return Promise.resolve();
        } else {
            return Promise.reject('请输入正确的验证码');
        }
        return Promise.resolve();
    }
}

// 验证集合
const rules: Record<string, Rule[]> = {
    email: [{ required: true, validator: emailValidatePass, trigger: 'blur' }],
    code: [{ required: true, validator: codeValidatePass, trigger: 'blur' }],
};

// 邮箱登录类型限制
interface emailLoginMethodType {
    email: string,
    code: string
}
// 邮箱登录用户信息
const emailLoginMethod = reactive<emailLoginMethodType>({
    email: '',
    code: ''
})
// 获取验证码
const sendcode = ref()
// 限制重复点击
const againClick = ref<boolean>(true)
// 验证码倒计时
const codeCountDown = ref<number>(60)
// 定时器
let timer: any = null
// 获取验证码
const getCode = async (): Promise<void> => {
    if (emailLoginMethod.email === '') {
        message.error('请填写邮箱')
    } else {
        // 判断是否重复发送请求
        if (againClick.value) {
            againClick.value = false
            // 发送请求
            const res = await SEND_EMAIL_CODE({ email: emailLoginMethod.email })
            if (res.data.status === 'status') {
                // 验证码倒计时
                timer = setInterval(() => {
                    codeCountDown.value--
                    sendcode.value.innerText = codeCountDown.value + 's'
                    // 清除定时器
                    if (codeCountDown.value === 0) {
                        clearInterval(timer)
                        sendcode.value.innerText = "发送验证码"
                        codeCountDown.value = 60
                        againClick.value = true
                    }
                }, 1000)
            } else {
                message.error('验证码发送失败请重试')
            }
        } else {
            message.warning('请勿重复发送验证码');
        }
    }
}

// 接收父组件的自定义事件
const emit = defineEmits(['click'])

const onPasswordLoginFinish = async (values: any): Promise<void> => {
    const { email, code } = values
    const res = await CHECK_EMAIL_CODE({ email, code })
    if (res.data.status === 'success') {
        clearTimeout(timer)
        emit('click', values.email)
    } else  {
        message.error(res.data.message)
    }
}

const onPasswordLoginFinishFailed = (): void => {

}
</script>

<style lang="less" scoped>
.regist_eamil_box {
    width: 380px;
    margin: 100px auto;

    .ant-btn-lg {
        width: 100%;
    }

    .sendCode {
        cursor: pointer;
    }
}
</style>