import { Rule } from "ant-design-vue/lib/form";

// 头像是否上传验证
const avaterValidatePass = async (_rule: Rule, value: string) => {
    if (value === '') {
        return Promise.reject('请上传头像');
    } else {
        return Promise.resolve();
    }
}
// 用户名验证
const usernameValidatePass = async (_rule: Rule, value: string) => {
    if (value === '') {
        return Promise.reject('请填写用户名');
    } else {
        const reg =  /^[\一-\龥]{2,8}$/
        if (reg.test(value)) {
            return Promise.resolve();
        } else {
            return Promise.reject('请输入2到8位由中文组成的昵称');
        }
        return Promise.resolve();
    }
}
// 账号验证
const accountValidatePass = async (_rule: Rule, value: string) => {   
    if (value === '') {
        return Promise.reject('请填写账号');
    } else {
        // 用户名正则验证
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/i
        if (reg.test(value)) {
            return Promise.resolve();
        } else {
            return Promise.reject('请输入8到16位由字母与数字组成的账号');
        }
        return Promise.resolve();
    }
}
// 密码验证
const passwordValidatePass = async (_rule: Rule, value: string) => {
    if (value === '') {
        return Promise.reject('请填写密码');
    } else {
        // 密码正则验证
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{9,16}$/i
        if (reg.test(value)) {
            return Promise.resolve();
        } else {
            return Promise.reject('请输入9到16位由字母与数字组成的密码');
        }
        return Promise.resolve();
    }
}
// 生日验证
const brithdayValidatePass = async (_rule: Rule, value: string) => {
    if (value === '') {
        return Promise.reject('请填写生日日期');
    } else {
        return Promise.resolve();
    }
}

export {
    avaterValidatePass,
    usernameValidatePass,
    accountValidatePass,
    passwordValidatePass,
    brithdayValidatePass
}