/*
 * @Author: zj.wang
 * @Date: 2021-07-02 10:57:52
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 23:08:42
 * @Description:
 */

// import { useStore } from '@/store'
// import axios from 'axios';
import HttpClient, { HttpClientConfig } from 'axios-mapper'
import { ElMessage } from 'element-plus'
import { getToken } from './auth'

const token = getToken()
const config: HttpClientConfig = {
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    token: !token ? '' : token
  }
}
const https = new HttpClient(config)

// request interceptor
https.httpClient.interceptors.request.use((config):any => {
  console.log('config', config)
  return config
}, (error: any) => {
  console.log(error)
  return Promise.reject(error)
})

// response interceptor
https.httpClient.interceptors.response.use((response: any) => {
  console.log('response', response)
  const data:any = response.data || response
  const code = response.status
  const message = response.message || ''
  if (code > 201) {
    console.log(`response error：${message}`) // for debug
    responseCode(data, code, message)
    return Promise.reject(new Error(message || 'Error'))
  }
  return data
}, (error: any) => {
  console.log('error', error)
  const { config } = error.config
  const data = error.response.data.data || error.response.data
  const message = error.response.data.message || ''
  const code = error.response.status
  responseCode(data, code, message, config)
  return Promise.reject(message || data)
})

function responseCode (data:any, code:number, message:string, config?:any):any {
  console.log('config', config)
  const msg = data || message || 'Error'
  if (code >= 400) {
    ElMessage({
      message: msg,
      type: 'error',
      duration: 5 * 1000
    })
  } else {
    ElMessage({
      message: msg,
      type: 'error',
      duration: 5 * 1000
    })
  }
  return Promise.reject(new Error(message || 'Error'))
}

export default https
