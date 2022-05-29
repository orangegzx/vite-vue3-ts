/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-param-reassign */
/*
 * @Author: zj.wang
 * @Date: 2021-09-26 17:03:15
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 23:31:33
 * @Description:
 */

/** 获取页面title
 *
 * @param {*} pageTitle
 * @returns
 */
export function getPageTitle (pageTitle:string):string {
  if (pageTitle) {
    return pageTitle
  }
  return 'Vue3'
}

/** 清除sessionStorage
 */
export function clearSessionStorage ():void {
  sessionStorage.clear()
}

/** 保存state到sessionStorage
 */
export function saveStateToSessionStorage (state:any):void {
  sessionStorage.setItem('storageState', state)
}

/** 获取sessionStorage
 */
export function getStateFromSessionStorage ():any {
  return sessionStorage.getItem('storageState')
}
export function removeStateFromSessionStorage ():void {
  sessionStorage.removeItem('storageState')
}

/** 清除localStorage
 */
export function clearLocalStorage ():void {
  localStorage.clear()
}

/** 获取localStorage
 */
export function getStateFromLocalStorage (name:string):string|null {
  return localStorage.getItem(name)
}

/** 获取url参数
 *
 * @param {*} url
 * @param {*} key
 * @returns
 */
export function getURLParams (url:string, key:string):string|null {
  const ourl = new URL(url)
  return ourl.searchParams.get(key)
}

export const parseTime = (
  time?: object | string | number | null,
  cFormat?: string
):string|null => {
  if (time === undefined || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date: Date
  if (typeof time === 'object') {
    date = time as Date
  } else {
    if (typeof time === 'string') {
      if (/^[0-9]+$/.test(time)) {
        // support "1548221490638"
        time = parseInt(time, 0)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        // eslint-disable-next-line prefer-regex-literals
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time *= 1000
    }
    date = new Date(time)
  }
  const formatObj: { [key: string]: number } = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    return value.toString().padStart(2, '0')
  })
  return timeStr
}

export const checkForm = (formName:any):any => new Promise((resolve, reject) => {
  const formRefName:any = formName?.value ?? formName
  formRefName.validate((valid: any) => {
    if (valid) {
      resolve(valid)
    } else reject(valid)
  })
})
