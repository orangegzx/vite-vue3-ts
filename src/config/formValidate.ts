/*
 * @Author: gezuxia
 * @Descripttion: 
 * @Date: 2022-02-14 18:08:42
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 23:30:24
 */
import * as validate from '../utils/validate'

const formValidate = (app:any) => {
  // URL校验
  app.provide('$checkCommonName', (rule:any, value:any, callback:any) => {
    console.log('aa', value, validate.isValidURL (value));
    if (!validate.isValidURL(value)) {
      callback(new Error('请输入正确的 URL'))
    } else {
      callback()
    }
  })
}

export default formValidate
