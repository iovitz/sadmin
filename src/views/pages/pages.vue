<template>
  <el-container class="h-full">
    <el-aside class="aside">
      <el-menu default-active="1-1" class="side-menu h-full border-r-0" :collapse="isCollapse" @change="hanleChange">
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
        <el-tooltip placement="bottom">
          <template #content> 收起菜单 </template>
          <el-icon @click="handleToggleCollapse" class="cursor-pointer mr-auto" size="20"><Expand /></el-icon>
        </el-tooltip>
        <el-tooltip placement="bottom">
          <template #content> {{ isFullscreen ? '退出全屏' : '全屏' }} </template>
          <el-icon class="cursor-pointer mr-2" size="20" @click="toggle"><FullScreen /></el-icon>
        </el-tooltip>

        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <div class="flex items-center">
              <el-avatar class="mr-1" :size="30" />
              网友
              <el-icon><ArrowDown /></el-icon>
            </div>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="exit">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-main class="bg-slate-200">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Expand, Setting, FullScreen, ArrowDown } from '@element-plus/icons-vue'
import { useFullscreen } from '@vueuse/core'
import { LocalST } from '@/utils/storage'
import { StorageKey } from '@/const/storage_key'
import { useRouter } from 'vue-router'

const { isFullscreen, toggle } = useFullscreen()
const router = useRouter()

const isCollapse = ref(false)
const handleToggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}

const hanleChange = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleCommand = (command: string) => {
  if (command === 'exit') {
    LocalST.remove(StorageKey.token)
    router.replace('/login')
  }
}
</script>

<style lang="scss" scoped>
.left-menu-logo {
  line-height: 60px;
  @apply text-white;
}
.aside {
  --el-aside-width: min-content;
  --el-menu-bg-color: #0f172a;
  --el-menu-text-color: #fff;
  --el-menu-hover-bg-color: #1e293b;
}
.side-menu {
  border-right: none;
}
</style>
