import serviceAxios from '../index'

const PASSWORD_LOGIN = (data: object): any => {
    return serviceAxios({
        method: 'POST',
        url: '/loginAccount',
        data
    })
}

export {
    PASSWORD_LOGIN
}