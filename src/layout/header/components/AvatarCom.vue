<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="squareUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const squareUrl = ref(
  'https://img2.baidu.com/it/u=1994380678,3283034272&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1659114000&t=3736a093d1aea6cc922fbe30c60d3828'
)

const logout = () => {
  store.dispatch('app/logout')
}
</script>

<style lang="scss">
::v-deep .el-avatar--square {
  white-space: nowrap;
}
</style>
