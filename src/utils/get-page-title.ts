/*
 * @Author: gezuxia
 * @Descripttion:
 * @Date: 2022-02-13 17:53:46
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 23:27:42
 */
import defaultData from '../config/default-data'

const title = defaultData.title || 'Walnut'

export default function getPageTitle (key:any) {
  // const route = useRoute()
  // const hasKey = i18n.te(`route.${key}`)
  const hasKey = key
  if (hasKey) {
    const pageName = key
    return `${pageName} - ${title}`
  }
  return `${title}`
}
