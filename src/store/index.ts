import { defineStore } from 'pinia'
import { getCookie } from '../http/CookieOperation'
// 请求导入
import { VALIDATION_TOKEN } from '../http/api/loginApi'
import { SET_ADDRESS } from '../http/api/accountApi'

// cookie/token方法
export const GlobalStore = defineStore('GlobalStore', {
    state: () => {
        return {
            token: getCookie('token'),
            // 判断token状态
            tokenStatus: false as boolean,
            userInfo: {} as any,
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


// export const BrowingHistory = defineStore('BrowingHistory', {
//     state: () => {
//         return {
//             // 存储浏览历史
//             historyList: [] as any
//         }
//     },
//     getters: {
//         getBrowingHistory: (state) => {
            
//             // return state.historyList
//         }
//     },
//     actions: {
//         // 将数据存入历史列表中
//         setBrowingHistroy(history:any) {
//             this.historyList.push(history)
//         }
//     }
// })