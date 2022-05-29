/*
 * @Author: gezuxia
 * @Descripttion:
 * @Date: 2022-02-04 16:25:01
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 23:54:12
 */
import { createStore } from 'vuex'
import getters from './getters'
import permission from './modules/permission'
import user from './modules/user'
import screen from './modules/screen.js'

// 创建 store 容器实例.
const store = createStore({
  modules: {
    user,
    permission,
    screen
  },
  getters
})

export default store
