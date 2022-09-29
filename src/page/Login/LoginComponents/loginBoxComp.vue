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
                    <a-form :model="userNmaeAndPassword" name="basic" autocomplete="off" :rules="rules"
                        @finish="onPasswordLoginFinish" @finishFailed="onPasswordLoginFinishFailed">
                        <a-form-item name="username">
                            <a-input v-model:value="userNmaeAndPassword.username" size="large" placeholder="账户">
                                <template #prefix>
                                    <idcard-filled />
                                </template>
                            </a-input>
                        </a-form-item>

                        <a-form-item name="password">
                            <a-input-password v-model:value="userNmaeAndPassword.password" size="large"
                                placeholder="密码">
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
                    <a-form :model="emailLoginMethod" name="basic" autocomplete="off" :rules="rules"
                        @finish="onPasswordLoginFinish" @finishFailed="onPasswordLoginFinishFailed">
                        <a-form-item name="email">
                            <a-input v-model:value="emailLoginMethod.email" size="large" placeholder="邮箱">
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
import type { Rule } from 'ant-design-vue/es/form';


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
// 密码登录方式验证成功的方式
const onPasswordLoginFinish = (values: Object) => {
    console.log(values);

}
// 密码登录方式验证错误的方式
const onPasswordLoginFinishFailed = (values: Object) => {
    console.log(values);
}
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

// 登录账号验证
const usernameValidatePass = async (_rule: Rule, value: string) => {
    if (value === '') {
        return Promise.reject('请输入用户名');
    } else {
        // 用户名正则验证
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,16}$/i
        if (reg.test(userNmaeAndPassword.username)) {
            return Promise.resolve();
        } else {
            return Promise.reject('请输入4到16位由字母与数字组成的账号');
        }
        return Promise.resolve();
    }
}
// 登录密码验证
const passwordValidatePass = async (_rule: Rule, value: string) => {
    if (value === '') {
        return Promise.reject('请输入密码');
    } else {
        // 密码正则验证
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{9,16}$/i
        if (reg.test(userNmaeAndPassword.password)) {
            return Promise.resolve();
        } else {
            return Promise.reject('请输入9到16位由字母与数字组成的密码');
        }
        return Promise.resolve();
    }
}
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
            return Promise.reject('验证码为6为数字');
        }
        return Promise.resolve();
    }
}

// 验证集合
const rules: Record<string, Rule[]> = {
    username: [{ required: true, validator: usernameValidatePass, trigger: 'blur' }],
    password: [{ required: true, validator: passwordValidatePass, trigger: 'blur' }],
    email: [{ required: true, validator: emailValidatePass, trigger: 'blur' }],
    code: [{ required: true, validator: codeValidatePass, trigger: 'blur' }],
};


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