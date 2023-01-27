<template>
  <el-tooltip placement="bottom">
    <template #content> 收起菜单 </template>
    <el-button type="primary" class="mr-4" @click="settingsStore.toggleAsideMenuCollapse" :icon="Expand" link></el-button>
  </el-tooltip>
  <el-breadcrumb separator="/" class="mr-auto">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
  <el-tooltip placement="bottom">
    <template #content> {{ isFullscreen ? '退出全屏' : '全屏' }} </template>
    <el-button type="primary" :icon="FullScreen" link @click="toggle"></el-button>
  </el-tooltip>

  <el-dropdown trigger="click" @command="handleCommand">
    <div class="flex items-center mx-4">
      <el-avatar class="mr-1" :size="30" />
      网友
      <el-icon><ArrowDown /></el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="exit">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <el-switch v-model="isDark" />

  <el-tooltip placement="bottom">
    <template #content> 打开设置 </template>
    <el-button type="primary" :icon="Setting" link></el-button>
  </el-tooltip>
  <global-drawer v-model="isOpen"> 123123 </global-drawer>
</template>
<script lang="ts" setup>
import { Setting, FullScreen, Expand, ArrowDown } from '@element-plus/icons-vue'
import { StorageKey } from '@/const/storage_key'
import { LocalST } from '@/utils/storage'
import { useFullscreen } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useSettingsStore } from '@/stores/settings.store'
import GlobalDrawer from '../global-drawer/global-drawer.vue'

const isOpen = ref(false)

const { isFullscreen, toggle } = useFullscreen()
const settingsStore = useSettingsStore()
const router = useRouter()

const isDark = ref(true)

const handleCommand = (command: string) => {
  if (command === 'exit') {
    LocalST.remove(StorageKey.token)
    router.replace('/login')
  }
}
</script>
<style lang="scss" scoped></style>
