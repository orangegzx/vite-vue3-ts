/*
 * @Author: gezuxia
 * @Descripttion:
 * @Date: 2022-02-04 16:25:39
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 23:55:40
 */
import { getUser } from '../utils/auth'

const getters = {
  userName: (state:any) => state.user.userInfo.username || (getUser() && getUser().username),
  userId: (state:any) => state.user.userId,
  roles: (state:any) => state.user.roles,
  token: (state:any) => state.user.token,
  permission_routes: (state:any) => state.permission.routes
}
export default getters
