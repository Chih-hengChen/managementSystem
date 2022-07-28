<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in bredCrumbList" :key="index">
      <span class="no-redirect" v-if="index === bredCrumbList.length - 1">{{
        $t(`menus.${item.name}`)
      }}</span>
      <span class="redirect" v-else @click="handleRedirect(item.path)">{{
        $t(`menus.${item.name}`)
      }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { watch, ref } from 'vue'

const route = useRoute()
const router = useRouter()

const bredCrumbList = ref([])
const initBredCrumbList = () => {
  bredCrumbList.value = route.matched
}

const handleRedirect = (path) => {
  router.push(path)
}

watch(
  route,
  () => {
    initBredCrumbList()
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped>
.no-redirect {
  color: #97a8be;
  cursor: text;
}

.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #545c64;
  }
}
</style>
