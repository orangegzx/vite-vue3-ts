/*
 * @Author: zuxia.ge
 * @Date: 2021-10-26 11:12:48
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 22:55:06
 * @Description: 默认配置数据
 */

const locale = window.localStorage.getItem('lang') || 'zh-CN'
export default {
  name: 'Vue3',
  // logo (./icons/svg/)
  title: 'Vue3',
  logo: 'Vue3@3x',
  // 默认语言
  locale,
  localeSelect: {
    'zh-CN': '中文(简体)',
    'en-US': 'English'
  },
  smallInputRules: {
    min: 1,
    max: 30,
    message: '长度在 1 到 30 个字符'
  },
  bigInputRules: {
    min: 1,
    max: 200,
    message: '长度在 1 到 200 个字符'
  },
  tagRules: {
    min: 1,
    max: 10,
    num: 5
  },
  inputLengthRules: {
    min: 1,
    max: 63,
    message: '长度在 1 到 63 个字符'
  },
  labelWidth: {
    mini: '80px',
    small: '100px',
    medium: '120px',
    max: '140px',
    larger: '160px',
    largest: '180px',
    superBiggest: '200px'
  },
  labelPosition: {
    right: 'right',
    left: 'left',
    top: 'top'
  }
}
