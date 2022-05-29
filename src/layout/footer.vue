<!--
 * @Author: gezuxia
 * @Descripttion: 
 * @Date: 2022-05-08 23:01:46
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-09 00:23:04
-->
<template>
  <footer class="app-footer">
    <a href="https://beian.miit.gov.cn/" target="_blank" class="beian">浙ICP备18029768号-2</a>
  </footer>
</template>

<script>
export default {
  name:'Footer',
  setup() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/mixin.scss';

.app-footer {
  height: $footerHeight;
  // background-color: $bgBlue;
  @include display-flex();
  font-size: 12px;
}
.beian {
  color: $linkGray;
}
</style>