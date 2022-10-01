import Cookies from "js-cookie";

const getCookie = (val) => {
    return Cookies.get(val)
}

const setCookie = (val, token) => {
    // 名字 token 限制时间
    return Cookies.set(val, token, { expires: 3 })
}

const removeCookie = (val) => {
    return Cookies.remove(val)
}

export {
    getCookie,
    setCookie,
    removeCookie
}