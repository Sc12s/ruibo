import { defineStore } from 'pinia'
import { getCookie } from '../http/CookieOperation'
// 请求导入
import { VALIDATION_TOKEN } from '../http/api/loginApi'

// cookie/token方法
export const GlobalStore = defineStore('GlobalStore', {
    state: () => {
        return {
            token: getCookie('token'),
            // 判断token状态
            tokenStatus: false,
            userInfo: {},
            uuid: ''
        }
    },
    getters: {
    },
    actions: {
        // 验证token是否过期，是否被修改
        async validationToken() {
            const res = await VALIDATION_TOKEN()
            if (res.data.status === 'error') {
                this.tokenStatus = false
                return false
            }
            this.uuid = res.data.tokenInfo.uuid
            this.tokenStatus = true
            this.userInfo = { ...res.data.tokenInfo }
            return true
        }
    }
})


// 购物车方法
export const GoodsCarStore = defineStore('GoodsCarStore', {
    state: () => {
        return {
            goodsList: [] as Object[]
        }
    },
    getters: {
        newGoodsList(state){
            console.log('123123123');
            
            return state
        }
    },
    actions: {

    }
})