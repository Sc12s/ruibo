import serviceAxios from '../index'

// 密码登录
const PASSWORD_LOGIN = (data: object): any => {
    return serviceAxios({
        method: 'POST',
        url: '/loginAccount',
        data
    })
}

// 验证token
const VALIDATION_TOKEN = (): any => {
    return serviceAxios({
        method: 'POST',
        url: '/validationToken'
    })
}

// 退出登录
const SIGN_OUT_ACCOUNT = (data: any): any => {
    return serviceAxios({
        method: 'POST',
        url: '/signOutAccount',
        data
    })
}

export {
    PASSWORD_LOGIN,
    VALIDATION_TOKEN,
    SIGN_OUT_ACCOUNT
}