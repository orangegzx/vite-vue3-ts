/*
 * @Author: zuxia.ge
 * @Date: 2021-09-27 18:35:04
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 23:32:37
 * @Description:
 */

import { constantRoutes, asyncRoutes } from '@/router'
import { getUser, removeToken } from '@/utils/auth.js'
// import { getTokenByCode } from '@/apis/user.js'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission (roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}
/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes (routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const state = {
  routes: []
}

const getters = {
  getterRoutes: state => state.routes
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = constantRoutes.concat(routes)
  },
  setToken (state, token) {
    state.token = token
  }
}

const actions = {
  // 获取token
  getUserToken ({ commit }, urlCode) {
    return new Promise(resolve => {
      try {
        const res = {
          token: 'admon'
        }
        commit('setToken', res.token)
        resolve(res)
      } catch (err) {
        removeToken()
      }
    })
  },
  generateRoutes ({ state, commit }, user) {
    return new Promise((resolve) => {
      let accessedRoutes = []
      accessedRoutes = constantRoutes
      const currentUser = getUser()
      // 如果当前已登录，则加载全部路由；否则只加载【home】的路由
      if (currentUser && currentUser.username) {
        accessedRoutes = asyncRoutes
      } else {
        accessedRoutes = []
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(state.routes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
