<template>
  <div class="navbar">
    <HamburgerCom />
    <BreadCrumb />
    <div class="navbar-right">
      <DriverCom class="navbar-item" />
      <ScreenFull class="navbar-item" />
      <LanguageCom class="navbar-item" />
      <AvatarCom class="navbar-item" />
    </div>
  </div>
</template>

<script setup>
import HamburgerCom from './components/HamburgerCom.vue'
import BreadCrumb from './components/BreadCrumb.vue'
import AvatarCom from './components/AvatarCom.vue'
import LanguageCom from './components/LanguageCom.vue'
import ScreenFull from './components/ScreenFull.vue'
import DriverCom from './components/DriverCom.vue'
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  .navbar-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ::v-deep .navbar-item {
      display: inline-block;
      margin-left: 18px;
      font-size: 22px;
      color: #5a5e66;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
</style>
