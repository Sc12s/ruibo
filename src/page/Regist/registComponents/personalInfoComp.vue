<template>
    <div class="reist_personal_info">
        <!-- 头像上传 -->
        <a-upload v-model:file-list="fileList" name="avatar" list-type="picture-card" class="upload_avater"
            :show-upload-list="false" action="http://127.0.0.1:3000/api/registAccount" @change="handleChange">
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else>
                <loading-outlined v-if="loading"></loading-outlined>
                <plus-outlined v-else></plus-outlined>
                <div class="ant-upload-text">上传头像</div>
            </div>
        </a-upload>
        <!-- 具体信息提交 -->
        <a-form :model="formState" name="basic" class="regist_form" autocomplete="off" @finish="onFinish"
            @finishFailed="onFinishFailed" :label-col="{ style: { width: '50px' } }">
            <!-- 用户名框 -->
            <a-form-item label="昵称" name="username">
                <a-input :value="formState.username" size="large" placeholder="请输入用户昵称" />
            </a-form-item>
            <!-- 账号框 -->
            <a-form-item label="账号" name="username">
                <a-input :value="formState.username" size="large" placeholder="请输入用户账号" />
            </a-form-item>
            <!-- 密码框 -->
            <a-form-item label="密码" name="password">
                <a-input-password :value="formState.password" size="large" placeholder="请输入用户密码" />
            </a-form-item>
            <!-- 性别 -->
            <a-form-item label="性别">
                <a-radio-group v-model:value="formState.resource">
                    <a-radio value="1">男</a-radio>
                    <a-radio value="2">女</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item label="生日">
                <a-date-picker size="large" style="width: 100%" placeholder="请选择本人生日" />
            </a-form-item>

            <a-form-item>
                <a-button type="primary" html-type="submit" size="large">注册</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script lang="ts" setup>
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { reactive, ref } from '@vue/reactivity';
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';

// 将图片转为base64
function getBase64(img: Blob, callback: (base64Url: string) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
}

// 接收邮箱
const props = defineProps({
    email: String
})

// 头像上传
const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>('');

// 具体信息
interface FormState {
    username: string
    password: string
    resource: string
}

const formState = reactive<FormState>({
    username: '',
    password: '',
    resource: '1'
});


// 上传头像方法
const handleChange = (info: UploadChangeParam) => {
    console.log(info, fileList);
}

const beforeUpload = () => {

}

// 具体信息方法
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};


</script>

<style lang="less" scoped>
.reist_personal_info {
    width: 500px;
    margin: 50px auto;

    .upload_avater {
        text-align: center;
    }

    .regist_form {
        margin-top: 25px;

        .ant-btn-lg {
            width: calc(100% - 50px);
            margin-left: 50px;
        }
    }
}
</style>