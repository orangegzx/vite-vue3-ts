/*
 * @Author: zuxia.ge
 * @Date: 2021-11-17 16:07:59
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 23:26:12
 * @Description:
 */

import Clipboard from 'clipboard'
import { ElMessage } from 'element-plus'

function clipboardSuccess () {
  ElMessage.success({
    message: '已复制到粘贴板', // '已复制到粘贴板',
    duration: 1500
  })
}
function clipboardError () {
  ElMessage.error('复制失败')
}
export default function handleClipboard (text:string, event:any) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
