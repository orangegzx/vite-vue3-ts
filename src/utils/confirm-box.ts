/*
 * @Description:
 * @Version: 2.0
 * @Autor: mayako
 * @Date: 2020-02-13 11:42:08
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 23:24:18
 */
import { ElMessageBox, ElMessage } from 'element-plus'
/**
 * @param {String} isDelete 是否为删除确认框，默认为普通确认框（用于删除和普通确认框的【确认】按钮样式）
 * @param {String} title 确认框标题
 * @param {String} message 确认框提示内容
 * @param {String} type 确认框类型
 */
// export function handleConfirm (isDelete:any = '', title:any = '提示', message:any = '确定执行此操作吗？', type:any = '') {
//   return ElMessageBox.confirm(message, {
//     title,
//     type,
//     confirmButtonText: '确认',
//     confirmButtonType: 'warning',
//     cancelButtonText: '取消',
//     cancelButtonClass: 'is-plain',
//     confirmButtonClass: !isDelete ? '' : 'el-button--danger'
//     // center: true
//   })
// }

// 未登录 | 令牌过期
export function loginoutConfirm (title = '提示', message = '确定执行此操作吗？', confirmText = '确认') {
  return ElMessageBox.confirm(message, {
    title,
    // type: type,
    // confirmButtonType: 'wanning',
    confirmButtonText: confirmText,
    cancelButtonText: '取消',
    cancelButtonClass: 'is-plain',
    center: true
  })
}
export function messageInfo (message:any = '删除成功！', type:any = 'success') {
  return ElMessage({
    message,
    type
  })
}
