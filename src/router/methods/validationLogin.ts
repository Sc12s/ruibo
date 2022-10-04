// pinia方法 
import { GlobalStore } from '../../store/index'

export const validLogin = async (next: any) => {
    // 实例化GlobalStore
    const useGlobalStore = GlobalStore()
    useGlobalStore.validationToken().then(status => {
        if (status) {
            next()
        } else {
            next('/loginPage')
        }
    })
}