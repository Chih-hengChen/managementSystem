<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    router
    unique-opened
    :collapse="!$store.getters.sideBarType"
  >
    <el-sub-menu :index="item.id" v-for="item in menusList" :key="item.id">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        :index="'/' + it.path"
        v-for="it in item.children"
        :key="it.id"
        @click="savePath(it.path)"
        >{{ $t(`menus.${it.path}`) }}</el-menu-item
      >
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { menuList } from '@/api/menu'
import { ref } from 'vue'

const menusList = ref([])
const defaultActive = ref(sessionStorage.getItem('path') || '/users')
const initMenuList = async () => {
  menusList.value = await menuList()
}
initMenuList()

const savePath = (path) => {
  sessionStorage.setItem('path', `${path}`)
}
</script>

<style lang="scss"></style>
