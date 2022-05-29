/*
 * @Author: gezuxia
 * @Descripttion:
 * @Date: 2022-05-09 23:03:18
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 22:48:09
 */
const state = {
  screenWidth: null // 设备物理宽度
}
const getter = {
}

const mutations = {
  SET_SCREEN_WIDTH (state, width) {
    state.screenWidth = width
  }
}
export default {
  namespaced: true,
  state,
  getter,
  mutations
  // actions
}
