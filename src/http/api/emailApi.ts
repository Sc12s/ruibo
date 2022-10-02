import serviceAxios from '../index'

const SEND_EMAIL_CODE = (data: object): any => {    
    return serviceAxios({
        method: 'POST',
        url: '/sendEmailCode',
        data
    })
}

const CHECK_EMAIL_CODE = (data: object): any => {    
    return serviceAxios({
        method: 'POST',
        url: '/validCode',
        data
    })
}

export {
    SEND_EMAIL_CODE,
    CHECK_EMAIL_CODE
}