<template>
  <div class="app-wrapper">
    <el-container>
      <el-aside width="210px" class="sidebar-container">
        <LayoutMenu />
      </el-aside>
      <el-container class="container">
        <el-header>
          <LayoutHeaders />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import LayoutMenu from './menu/LayoutMenu.vue'
import LayoutHeaders from './header/LayoutHeaders'
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>
