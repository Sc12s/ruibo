import { createApp } from 'vue'
import App from './App.vue'
// antd-vue导入
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
// 路由导入
import vueRouter from '../src/router'
// 全局css导入
import './global/global.less'
// animate.css导入
import 'animate.css'
// pinia导入
import { createPinia } from 'pinia';
const pinia = createPinia()

const app = createApp(App)
// 使用antd
app.use(antd)
// 路由导入
app.use(vueRouter)
// pinia使用
app.use(pinia)
// 挂载app.vue
app.mount('#app')
