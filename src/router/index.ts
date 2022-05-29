/*
 * @Author: gezuxia
 * @Descripttion: 路由
 * @Date: 2022-02-04 16:30:27
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 22:43:28
 */
// createWebHashHistory
import { createRouter, createWebHistory } from 'vue-router'
// import { shallowRef } from 'vue'
// import Layout from '@/layout/index.vue'
import Layout from '@/layout/index.vue'
// import { getToken, getActiveNavMenu } from '@/utils/auth'

export const constantRoutes = [
  {
    path: '/',
    redirect: '/home',
    hidden: true
  },
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    meta: {
      title: '主页',
      icon: 'yibiaopan'
    },
    children: [
      {
        path: '',
        name: 'Home',
        meta: { title: '主页', activeMenu: '/home' },
        component: () => import('@/views/hello/hello.vue')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    hidden: true
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    redirect: '/404'
  }
]

export const asyncRoutes = [
  {
  }
]

// 判断加载的路由
// const token = getToken()
// const routers = !token ? constantRoutes : constantRoutes.concat(asyncRoutes)

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  // routes: routers // constantRoutes
  routes: constantRoutes
})

export function resetRouter () {
  const newRouter = router;
  (router as any).matcher = (newRouter as any).matcher // reset router
}
export default router
