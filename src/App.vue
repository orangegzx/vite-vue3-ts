<!--
 * @Author: gezuxia
 * @Descripttion:
 * @Date: 2022-02-04 16:12:16
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 23:35:01
-->
<template>
  <div class="app-wrapper">
    <ElConfigProvider :locale="locale">
      <router-view v-if="isRouterAlice" />
    </ElConfigProvider>
  </div>
</template>

<script lang="ts">
import { ref, provide, nextTick } from 'vue'
import { ElConfigProvider } from 'element-plus' // 解决 element plus 组件默认语言为英文的问题
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
// import { useStore } from 'vuex'

export default {
  /**
   * ElConfigProvider：提供全局的配置选项，在全局中可被访问到。
   * https://www.w3cschool.cn/vue_elementplus/ElementPlusConfigProvider.html
   */
  components: {
    [ElConfigProvider.name]: ElConfigProvider // 添加组件：通过 ConfigProvider 的方式来包裹组件使用
  },
  setup () {
    const locale = zhCn

    // const $store = useStore()
    // $store.commit('screen/SET_SCREEN_WIDTH', window.screen.width)

    const isRouterAlice = ref(true) // 刷新路由flag
    const onRefresh = () => {
      isRouterAlice.value = false
      nextTick(() => {
        isRouterAlice.value = true
      })
    }
    /**
     * 无视觉差的页面大刷新
     * 如需使用，只需在页面通过 inject 注入使用即可：const reloadRouter = inject('reload')
     */
    provide('reload', onRefresh)

    return {
      locale,
      isRouterAlice
    }
  }

}
</script>
