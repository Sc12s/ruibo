import serviceAxios from '../index'

const SEND_EMAIL_CODE = (data) => {
    return serviceAxios({
        method: 'POST',
        url: '/sendEmailCode',
        data
    })
}

export {
    SEND_EMAIL_CODE
}