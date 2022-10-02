import Cookies from 'js-cookie'

const getCookie = (val: string) => {
    return Cookies.get(val)
}

const setCookie = (val: string, token: string) => {
    // 名字 token 限制时间
    return Cookies.set(val, token, { expires: 3 })
}

const removeCookie = (val: string) => {
    return Cookies.remove(val)
}

export {
    getCookie,
    setCookie,
    removeCookie
}