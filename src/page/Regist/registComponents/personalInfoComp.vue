<template>
    <div class="reist_personal_info">
        <!-- 具体信息提交 -->
        <a-form :model="personInfoForm" name="basic" class="regist_form" autocomplete="off" @finish="onFinish"
            :rules='rules' @finishFailed="onFinishFailed" :label-col="{ style: { width: '50px' } }">
            <!-- 头像上传 -->
            <a-form-item name="avaterurl" label="头像" extra="请上传要是使用的头像,格式为.jpg/.png/.jpeg">
                <a-upload v-model:fileList="personInfoForm.avaterurl" name="avater"
                    action="http://127.0.0.1:3000/api/registUploadAvater" list-type="picture" accept=".jpg, .png, .jpeg"
                    @remove="removeImage" :before-upload="checkImageNums">
                    <a-button>
                        <template #icon>
                            <UploadOutlined />
                        </template>
                        点击上传,最多一张
                    </a-button>
                </a-upload>
            </a-form-item>
            <!-- 用户名框 -->
            <a-form-item label="昵称" name="username">
                <a-input v-model:value="personInfoForm.username" size="large" placeholder="请输入用户昵称" />
            </a-form-item>
            <!-- 账号框 -->
            <a-form-item label="账号" name="account">
                <a-input v-model:value="personInfoForm.account" size="large" placeholder="请输入用户账号" />
            </a-form-item>
            <!-- 密码框 -->
            <a-form-item label="密码" name="password">
                <a-input-password v-model:value="personInfoForm.password" size="large" placeholder="请输入用户密码" />
            </a-form-item>
            <!-- 性别 -->
            <a-form-item label="性别" name="gender" :rules="[{ required: true }]">
                <a-radio-group v-model:value="personInfoForm.gender">
                    <a-radio value="1">男</a-radio>
                    <a-radio value="2">女</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item label="生日" name="brithday">
                <a-date-picker size="large" style="width: 100%" placeholder="请选择本人生日"
                    v-model:value="personInfoForm.brithday" value-format="YYYY-MM-DD" />
            </a-form-item>
            <a-form-item>
                <a-button type="primary" html-type="submit" size="large">注册</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from '@vue/reactivity';
import { UploadOutlined } from '@ant-design/icons-vue';
// 导入注册相关api
import { REMOVE_UPLOAD_AVATER, REGIST_ACCOUNT } from '../../../http/api/registApi'
import { message } from 'ant-design-vue';
import { Rule } from 'ant-design-vue/es/form';
// 自定义校验导入
import {
    avaterValidatePass,
    usernameValidatePass,
    accountValidatePass,
    passwordValidatePass,
    brithdayValidatePass
} from './Validator'
import { any } from 'vue-types';

// 接收邮箱
const props = defineProps({
    email: String
})

// 具体信息
interface FormState {
    username: string
    password: string
    account: string
    gender: string
    brithday: string
    avaterurl: any
}
// 表单信息
const personInfoForm = reactive<FormState>({
    username: '',
    password: '',
    account: '',
    gender: '1',
    brithday: '',
    avaterurl: []
});

// 删除头像
const removeImage = (value: any) => {
    return REMOVE_UPLOAD_AVATER({ imageName: value.name }).then((res: any) => {
        if (res.data.status === 'success') {
            return true
        } else {
            message.error('删除图片失败')
            return false
        }
    })
}

// 检查上传多少张图
const checkImageNums = (values: any) => {
    if (personInfoForm.avaterurl.length < 1) {
        return true
    }
    message.error('上传失败,只能上传一张图片')
    return false
}

// 表单校验
// 验证集合
const rules: Record<string, Rule[]> = {
    avaterurl: [{ required: true, validator: avaterValidatePass, trigger: 'blur' }],
    username: [{ required: true, validator: usernameValidatePass, trigger: 'blur' }],
    account: [{ required: true, validator: accountValidatePass, trigger: 'blur' }],
    password: [{ required: true, validator: passwordValidatePass, trigger: 'blur' }],
    brithday: [{ required: true, validator: brithdayValidatePass, trigger: 'blur' }]
};

// 跳转
const emit = defineEmits(['click'])

// 具体信息方法
const onFinish = (values: any) => {
    const newValues = {
        ...values,
        avaterurl: values.avaterurl[0].response.imageurl,
        email: props.email,
        usertype: 1
    }

    REGIST_ACCOUNT(newValues).then((res: any) => {
        if (res.data.status === 'success') {
            emit('click', { status: 'success' })
            return message.success('注册成功')

        }
        emit('click', { status: 'error' })
        message.error('注册失败，请重新尝试')
    })

};

const onFinishFailed = (errorInfo: any) => {
    message.error('请认真完善个人信息')
};


</script>

<style lang="less" scoped>
.reist_personal_info {
    width: 500px;
    margin: 50px auto;

    .regist_form {
        margin-top: 25px;

        .ant-btn-lg {
            width: calc(100% - 50px);
            margin-left: 50px;
        }
    }
}
</style>