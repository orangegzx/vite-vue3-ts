/*
 * @Author: gezuxia
 * @Descripttion:
 * @Date: 2022-02-04 16:26:10
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-30 00:22:55
 */
import { getToken, getUser, removeToken, clearLocalStorage } from '../../utils/auth'
// import router, { resetRouter } from '../../router'
import { resetRouter } from '../../router'

const state = {
  token: getToken(),
  userInfo: {
    username: '',
    email: '',
    invitation: '',
    uid: ''
  }
}

const getter = {
  getterUserName: (state: { userInfo: { username: any } }) => state.userInfo.username || (getUser() && getUser().userName)
}

const mutations = {
  SET_USER_INFO (state: any, data: any) {
    state.userInfo = data
  },
  SET_TOKEN: (state: any, token: any) => {
    state.token = token
  }
}

const actions = {
  // login
  Login () {
    return new Promise((resolve) => {
      resolve(true)
    })
  },

  // 获取用户信息
  GetInfo () {
    return new Promise((resolve) => {
      resolve({
        name: 'admin'
      })
      // getInfo().then((res) => {
      //   dispatch('schedule/GetCategoryList', {}, { root: true })
      //   commit('SET_USER_INFO', res)
      //   setUser(JSON.stringify(res))
      //   resolve(res)
      // }).catch((err) => {
      //   reject(err)
      // })
    })
  },

  // 登出
  Logout () {
    return new Promise((resolve) => {
      clearLocalStorage()
      resetRouter()
      resolve(true)
    })
  },

  // remove token
  resetToken () {
    return new Promise((resolve) => {
      // commit('SET_TOKEN', '')
      // commit('SET_ROLES', [])
      removeToken()
      resolve(true)
    })
  }
}

export default {
  namespaced: true,
  state,
  getter,
  mutations,
  actions
}
