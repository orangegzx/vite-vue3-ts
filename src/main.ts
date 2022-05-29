/*
 * @Author: gezuxia
 * @Descripttion:
 * @Date: 2022-05-27 15:22:30
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 23:56:24
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 整个应用支持路由
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
