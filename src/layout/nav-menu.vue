<!--
 * @Author: gezuxia
 * @Descripttion: 
 * @Date: 2022-05-10 18:45:47
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-10 23:04:28
-->
<template>
  <el-menu
    :default-active="activeMenu"
    :mode="mode"
    class="menu-container"
    @select="handleClickMeau"
  >
    <slot name="itemTop"></slot>
    <el-menu-item
      v-for="item in routers"
      :key="item.path"
      :index="resolvePath(item.path, item.children[0].path)"
      class="menu-item"
    >
      {{ item.children[0].meta.title }}
    </el-menu-item>
    <slot name="itemFooter"></slot>
  </el-menu>
</template>

<script>
import { computed } from "vue"
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { isExternal } from '@/utils/validate'
import { setActiveNavMenu } from '@/utils/auth.js'

export default {
  name: 'NavMeau',
  props: {
    mode: { type:String, default: 'vertical' },
  },
  emits: ['logout', 'isShowDrawerMenu'],
  setup(props, { emit }) {
    const $route = useRoute()
    const $router = useRouter()
    const $store = useStore()
  
    const routers = computed(() => {
      const router_list = $store.getters['permission/getRoutes']
      const result = router_list.filter(item => !!item.meta && !item.hidden)
      return result
    })

    const activeMenu = computed(() => {
      const { meta } = $route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return $route.path
    })

    // const key = computed(() => {
    //   return $route.path
    // })

    // 解析path
    const resolvePath = (basePath, routePath) => {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(basePath)) {
        return basePath
      }

      if (basePath !== '' && basePath !== routePath) {
        return !routePath ? basePath :  + `${basePath}/${routePath}`
      } else {
        return routePath
      }
    }

    // 菜单跳转
    const handleClickMeau = (index, indexPath, item, routeResult) => {
      console.log(index, indexPath, item, routeResult);
      setActiveNavMenu(index)
      emit('isShowDrawerMenu') // 抽屉菜单
      if(index === 'logout') {
        emit('logout')
      } else {
        // setActiveNavMenu(index)
        $router.push({
          path: index
        })
      }
    }
     
    return {
      routers,
      activeMenu,
      resolvePath,
      handleClickMeau,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.menu-container {
  // flex: 1 1 auto;
  flex: 0 0 auto;
  border: none;
  justify-content: flex-end;
  background-color: initial !important;
  .menu-item {
    color: #fafafa;
    &:hover,
    &:focus{
      color: #fafafa;
      background-color: inherit !important;
    }
  }

  :deep(.el-menu-item:not(.is-disabled):focus),
  :deep(.el-menu-item:not(.is-disabled):hover) {
    color: #fafafa;
  }

  .menu-item.is-active {
    color: $link;
  }
}

  
// border-bottom
:deep(.el-menu--horizontal) {
  border-bottom: none;
}
:deep(.el-menu-item.menu-item) {
  border: none !important;
}
:deep(.el-menu--horizontal>.el-menu-item.is-active) {
  border-bottom: none;
}

</style>