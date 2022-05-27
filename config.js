/*
 * @Author: zuxia.ge
 * @Date: 2021-09-26 17:13:42
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-01 23:47:28
 * @Description: 基础配置
 */

const apiURL = import.meta.env.VITE_APP_API_URL || ''
const apiPrefix = import.meta.env.VITE_APP_BASE_API || ''

// 登录后默认首页
export const LOGIN_AFTER_INDEX = window.location.protocol + "//" + window.location.host
// 认证地址
export const AUTH_URL = apiURL === '' ? LOGIN_AFTER_INDEX + apiPrefix : apiURL

export const REDIRECT_URL = encodeURI(LOGIN_AFTER_INDEX)
// 登录地址
export const LOGIN_URL = `${AUTH_URL}/auth?redirect_uri=${REDIRECT_URL}`

// 登出地址
export const LOGOUT_URL = `${AUTH_URL}/auth/logout?redirect_uri=${LOGIN_AFTER_INDEX}`
