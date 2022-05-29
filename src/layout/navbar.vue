<!--
 * @Author: zuxia.ge
 * @Date: 2021-08-12 11:27:28
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-11 00:28:25
 * @Description:
-->
<template>
  <div class="navbar">
    <!-- logo -->
    <div class="navbar-item logo-wrapper">
      <!-- <SvgIcon :icon-class="logoIcon" style="width: 24px;height: 40px;margin-right: 16px;" /> -->
      <span class="logo-container" @click="goToHome">{{ systemTitle }}</span>
    </div>

    <!-- 大分辨率 -->
    <div v-if="username" class="navbar-item right-menu medium-device">
      <el-icon :size="20" color="#fff" @click="gotToSearchPage"><i-search /></el-icon>
      <NavMenu :mode="'horizontal'" class="menu-container" @logout="logout" @isShowDrawerMenu="isShowMenu"></NavMenu>
      <!-- user -->
      <el-dropdown
        class="avatar-container"
        popper-class="medium-device-user_select"
        trigger="click"
        size="medium"
        @command="userDropdownClick"
      >
        <span class="user-wrapper">
          <el-image :src="userInfo.avatar" class="user-icon"></el-image>
          <el-icon><i-caret-bottom /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="" disabled>
              <!-- <svg-icon icon-class="user-line" :size="32" class="icon-username" /> -->
            {{ username }}</el-dropdown-item>
            <el-dropdown-item command="logout">退出<svg-icon icon-class="logout" :size="20" class="icon-logout" /></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <!-- 小分辨率 -->
    <div v-if="username" class="navbar-item right-menu small-device">
      <section class="meau-wrapper">
        <el-icon :size="20" color="#fff" class="icon-serach" @click="gotToSearchPage"><i-search /></el-icon>
        <el-image :src="userInfo.avatar" class="user-icon"></el-image>
        <svg-icon icon-class="nav" :size="24" class="icon-nav" @click="isShowMenu" />
      </section>
      <DrawerLayout
        v-model:modelValue="isShowMenuDrawer"
        :with-header="false"
        :with-footer="false"
        direction="ttb"
        size="200"
        :custom-class="'small-device-menu-container'"
      >
        <template #default>
          <NavMenu class="menu-container" @logout="logout" @isShowDrawerMenu="isShowMenu">
            <template #itemFooter>
              <el-menu-item class="menu-item logout" :index="'logout'">
                {{ username }} 退出
                <svg-icon icon-class="exit" :size="20" class="icon-logout" />
                </el-menu-item>
            </template>
          </NavMenu>
        </template>
      </DrawerLayout>
    </div>
    <el-button v-else type="text" class="btn-logout" @click="login">登录</el-button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import defaultData from '@/config/default-data.js'
import user from '@/hooks/user.js'
import NavMenu from './nav-menu.vue'
import DrawerLayout from '@/components/drawer-layout/drawer-layout.vue'

export default {
  name: 'navbar',
  components: { NavMenu, DrawerLayout },
  setup() {
    // 当前实例
    const $router = useRouter()
    const $store = useStore()

    const isShowMenuDrawer = ref(false)
    const searchKeyword = ref('')
   
    // const logoIcon = defaultData.logo
    const systemTitle = defaultData.title
    const { username, userInfo } = user()
    
    // 登录
    const login = () => {
      $store.dispatch('user/Login')
    }
    // 登出
    const logout = () => {
      $store.dispatch('user/Logout')
    }

    const userDropdownClick = (commond) => {
      if (commond === 'logout') {
        logout()
      }
    }
   
    // 收起导航-跳转
    const handlerNavClick = (command) => {
      if (command && command.path) {
         $router.push({
          path: command.path
        })
      } else {
        logout()
      }
    }

    // 小于768
    const isShowMenu = () => {
      isShowMenuDrawer.value = !isShowMenuDrawer.value
    }

    const goToHome = () => {
      $router.push({
        path: '/'
      })
    }

    const gotToSearchPage = () => {
       $router.push({
         name: 'SearchPage',
         query: {
           keyword: searchKeyword.value
         }
      })
    }

    return {
      isShowMenu,
      isShowMenuDrawer,
      // logoIcon,
      systemTitle,
      userInfo,
      username,
      userDropdownClick,
      handlerNavClick,
      login,
      logout,
      goToHome,
      gotToSearchPage,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/mixin.scss';
.navbar {
  @include display-flex(space-between, center, nowrap);
}

// logo
.navbar .logo-wrapper {
  flex: 0 0 100px;
  color: #fff;
  line-height: 40px;
  display: flex;
  .logo-container {
    line-height: 40px;
    color: #fff;
    font-weight: 600;
    font-size: 26px;
    cursor: pointer;
  }
}

.navbar .right-menu {
  @include display-flex(flex-end, center, nowrap);
}

// meau
.right-menu.medium-device .menu-container{
  min-width: 490px;
}
.right-menu.small-device .menu-container{
  :deep(.el-menu-item) {
    justify-content: flex-end;
    height: 40px;
    line-height: 40px;
    font-weight: 500;
    font-size: 16px;
  }
  .menu-item.logout {
    color: #fafafa;
  }
  .username {
    opacity: .8;
  }
  :deep(.el-menu-item.is-disabled) {
    color: #fafafa;
  }
}

// >768px
.right-menu.medium-device {
  flex: 1 1 auto;
  line-height: 40px;
  cursor: pointer;
  // user
  .avatar-container {
    flex: 0 0 80px;
    padding-left: 20px;
  }
}

// < 768 nav
.right-menu.small-device  {
  // 菜单抽屉
  :deep(.el-overlay) {
    top: $navbarHeight; // =navbar height
    background-color: rgba(0,0,0,0);
    .el-drawer__body {
      padding: 0 10px 10px 0;
    }
  }
  :deep(.small-device-menu-container) {
    background-color: rgba(0,0,0,0.8);
    color: $white;
  }
}

// user-icon
.user-wrapper, .meau-wrapper {
  @include display-flex(flex-end, center, nowrap);
  .user-icon, .icon-serach {
    margin-right: 8px;
  }
  .user-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: $white;
    margin-right: 8px;
  }
}
.icon-logout, .icon-username {
  margin: 0 4px;
}

// 退出
.btn-logout,
.btn-logout:hover,
.btn-logout:focus,
.btn-logout:active {
  color: #fafafa;
}
</style>

<style lang="scss">
.small-device-nav_select .el-popper__arrow,
.medium-device-user_select .el-popper__arrow {
  display: none;
}
</style>
