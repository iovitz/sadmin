<template>
  <el-container class="h-full">
    <el-aside class="aside">
      <el-menu default-active="1-1" class="side-menu h-full border-r-0" :collapse="settingsStore.isAsideMenuCollapse" @change="hanleChange">
        <h1 class="text-center left-menu-logo">LOGO</h1>
        <el-menu-item index="/dashboard">
          <el-icon><icon-menu /></el-icon>
          <template #title>数据看板</template>
        </el-menu-item>
        <el-menu-item index="/table">
          <el-icon><document /></el-icon>
          <template #title>表格</template>
        </el-menu-item>
        <el-menu-item index="/editor">
          <el-icon><document /></el-icon>
          <template #title>富文本编辑器</template>
        </el-menu-item>
        <el-menu-item index="/icons">
          <el-icon><setting /></el-icon>
          <template #title>图标</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="flex items-center">
        <TopBar />
      </el-header>
      <el-main class="bg-slate-200 dark:bg-neutral-900">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import TopBar from '@/widget/top-bar/top-bar.vue'
import { useSettingsStore } from '@/stores/settings.store'
const settingsStore = useSettingsStore()

const hanleChange = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.left-menu-logo {
  line-height: 60px;
  @apply text-white;
}
.aside {
  --el-aside-width: min-content;
  /* --el-menu-bg-color: #0f172a;
  --el-menu-text-color: #fff;
  --el-menu-hover-bg-color: #1e293b; */
}
.side-menu {
  border-right: none;
}
</style>
