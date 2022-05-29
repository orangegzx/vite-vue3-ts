<!--
 * @Author: zuxia.ge
 * @Date: 2021-07-21 10:27:09
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-29 23:37:30
 * @Description:
-->
<template>
  <h2>layout222</h2>
  <!-- <Navbar /> -->
  <div class="main-wrapper">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <!-- <AppFooter /> -->
  </div>
</template>

<script lang="ts">
// import Navbar from './navbar.vue'
// import AppFooter from './footer.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    // Navbar,
    // AppFooter
  },
  setup () {
    const $route = useRoute()

    const key = computed(() => {
      return $route.path
    })
    return {
      key
    }
  }
}

</script>

<style lang="scss" scoped>
// .a {
//   background-color: orange;
//   width: 100%;
//   height: 52px;
// }
</style>
