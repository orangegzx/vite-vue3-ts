/*
 * @Author: gezuxia
 * @Descripttion: =
 * @Date: 2022-05-29 23:29:02
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 23:31:55
 */
export const isEmail = (str: string) => {
  const reg = /^([a-zA-Z0-9]+[-_.]?)+@[a-zA-Z0-9]+\.[a-z]+$/
  return reg.test(str)
}

export const isPhone = (str: string) => {
  const reg = /^[1][3-9][0-9]{9}$/
  return reg.test(str)
}
export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)

export const isArray = (arg: any) => {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

export const isValidURL = (url: string) => {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

// 允许两位小数点的正整数和小数
export const isValidPrice = (num:string) => {
  // const reg = /^[0-9]+.{0,1}[0-9]{0,2}$/;
  const reg = /^[0-9]+(\.[0-9]{1,2})?$/
  return reg.test(num)
}
