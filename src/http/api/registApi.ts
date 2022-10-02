import serviceAxios from '../index'

const REMOVE_UPLOAD_AVATER = (data: object): any => {
    return serviceAxios({
        method: 'POST',
        url: '/registRemoveAvater',
        data
    })
}

const REGIST_ACCOUNT = (data: object): any => {
    return serviceAxios({
        method: 'POST',
        url: '/registAccount',
        data
    })
}

export {
    REMOVE_UPLOAD_AVATER,
    REGIST_ACCOUNT
}