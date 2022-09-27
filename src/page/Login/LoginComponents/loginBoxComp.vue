<template>
    <div class="container_box">
        <!-- app下载 -->
        <a class="download_box"></a>
        <ul class="login_box">
            <!-- 登录方式切换按钮 -->
            <li>
                <span :class="changeLoginIndex == 0 && 'login_border'" @click="changeLoginMethods(0)">密码登录</span>
                <span :class="changeLoginIndex == 1 && 'login_border'" @click="changeLoginMethods(1)">邮箱登录</span>
            </li>
            <!-- 用户信息表单 -->
            <li>
                <!-- 账号密码登录表单 -->
                <div class="password_login_method" v-show="!changeLoginIndex">
                    <a-form :model="userNmaeAndPassword" name="basic" autocomplete="off" @finish="onPasswordLoginFinish"
                        @finishFailed="onPasswordLoginFinishFailed">
                        <a-form-item name="username" :rules="[{ required: true, message: '请输入用户名！！' }]">
                            <a-input v-model="userNmaeAndPassword.username" size="large" placeholder="账户">
                                <template #prefix>
                                    <idcard-filled />
                                </template>
                            </a-input>
                        </a-form-item>

                        <a-form-item name="password" :rules="[{ required: true, message: '请输入密码！！' }]">
                            <a-input-password v-model="userNmaeAndPassword.password" size="large" placeholder="密码">
                                <template #prefix>
                                    <lock-filled />
                                </template>
                            </a-input-password>
                        </a-form-item>
                        <a-form-item>
                            <a-button html-type="submit" size="large">登录</a-button>
                        </a-form-item>
                    </a-form>
                </div>
                <!-- 邮箱登录表单 -->
                <div class="email_login_method" v-show="changeLoginIndex">
                    <a-form :model="emailLoginMethod" name="basic" autocomplete="off" @finish="onPasswordLoginFinish"
                        @finishFailed="onPasswordLoginFinishFailed">
                        <a-form-item name="email" :rules="[{ required: true, message: '请输入用户名！！' }]">
                            <a-input v-model="emailLoginMethod.email" size="large" placeholder="邮箱">
                                <template #prefix>
                                    <mail-outlined />
                                </template>
                            </a-input>                        
                        </a-form-item>

                        <a-form-item name="code" :rules="[{ required: true, message: '请输入密码！！' }]">
                            <a-input v-model="emailLoginMethod.code" size="large" placeholder="验证码">
                                <template #prefix>
                                    <safety-certificate-outlined />
                                </template>
                                <template #addonAfter>
                                    <div class="sendCode" ref="sendcode" @click="getCode">获取验证码</div>
                                </template>
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-button html-type="submit" size="large">登录</a-button>
                        </a-form-item>
                    </a-form>
                </div>
            </li>
            <li>
                <div>
                    <user-switch-outlined /> 邮箱登录
                </div>
                <div>免费注册</div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
// 图标导入
import { IdcardFilled, LockFilled, UserSwitchOutlined, MailOutlined, SafetyCertificateOutlined } from '@ant-design/icons-vue';
import { reactive, ref } from "@vue/reactivity"
import { message } from 'ant-design-vue';


// 登录方式切换
const changeLoginIndex = ref<number>(0)

const changeLoginMethods = (index: number): void => {
    changeLoginIndex.value = index
}

// 用户信息表单
interface userNmaeAndPasswordType {
    username: string,
    password: string
}
const userNmaeAndPassword = reactive<userNmaeAndPasswordType>({
    username: '',
    password: ''
})
// 密码登录方式完成的方式
const onPasswordLoginFinish = (values: any) => {

}
const onPasswordLoginFinishFailed = (values: any) => {

}


// 邮箱登录类型限制
interface emailLoginMethodType {
    email: string,
    code: number
}
// 邮箱登录用户信息
const emailLoginMethod = reactive<emailLoginMethodType>({
    email: '',
    code: 0
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
const getCode = (): void => {
    if (againClick.value) {
        againClick.value = false
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
        message.warning('请勿重复发送验证码');
    }
}


</script>

<style scoped lang="less">
.container_box {
    width: 1200px;
    height: 350px;
    background: none;
    display: flex;
    justify-content: flex-start;

    .download_box {
        width: calc(1200px - 350px);
        height: 100%;
    }

    .login_box {
        width: 350px;
        height: 100%;
        background-color: hsla(0, 0%, 100%, .9);
        padding: 30px 25px;
        margin: 0;
        list-style-type: none;

        li:nth-child(1) {
            font-size: 16px;
            color: #3c3c3c;
            font-weight: 700;
            margin-bottom: 25px;

            span {
                cursor: pointer;
            }

            span:nth-child(2) {
                margin: 0 10px;
            }
        }

        li:nth-child(2) {

            .password_login_method :deep(.ant-btn),
            .email_login_method :deep(.ant-btn) {
                width: 100%;
                background-color: #ff5000;
                border: #ff5000;
                color: #fff;
                font-weight: 700;
            }

            .password_login_method :deep(.ant-input-affix-wrapper-lg),
            .email_login_method :deep(.ant-input-affix-wrapper-lg) {
                border: 1px solid rgb(217, 217, 217);
                box-shadow: none;
            }

            .password_login_method :deep(.ant-input-affix-wrapper-lg):hover,
            .email_login_method :deep(.ant-input-affix-wrapper-lg):hover {
                box-shadow: none;
                border: 1px solid #ff5000;
            }

            .sendCode {
                cursor: pointer;
            }
        }

        li:nth-child(3) {
            color: #6c6c6c;

            div:hover {
                color: #ff5000;
                transition: all .5s;
            }

            div {
                cursor: pointer;
            }

            div:nth-child(2) {
                text-align: right;
            }

        }
    }

    // 登录方式切换下方横条
    .login_border {
        border-bottom: 2px solid #3c3c3c;
    }
}
</style>