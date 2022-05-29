/*
 * @Author: zuxia.ge
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 23:27:01
 * @Description:
 */

const TokenKey = 'X-User-Token'
const userKey = 'user'

export function getToken () {
  return localStorage.getItem(TokenKey)
}

export function setToken (token:any) {
  localStorage.setItem(TokenKey, token)
}

export function removeToken () {
  localStorage.removeItem(TokenKey)
}

export function setUser (user:any) {
  localStorage.setItem(userKey, user)
}

export function getUser () {
  const res:any = localStorage.getItem(userKey)
  return JSON.parse(res)
}

/** 清除localStorage
 */
export function clearLocalStorage () {
  localStorage.clear()
}

// 菜单栏激活的菜单
// export function setActiveNavMenu (path) {
//   localStorage.setItem(activeMenuKey, path)
// }
// export function getActiveNavMenu () {
//   return localStorage.getItem(activeMenuKey)
// }
