<template>
  <div class="global-container">
    <aside class="left-menu-bar">
      <el-menu default-active="2" class="global-menu" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
        <h1 class="left-menu-logo">LOGO</h1>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>
    </aside>
    <div class="global-content">
      <header class="global-content">2</header>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.global-container {
  height: 100%;
  width: 100%;
  background: #eee;
  display: flex;
}
.left-menu-bar {
  flex-direction: column;
  .left-menu-logo {
    text-align: center;
    line-height: 50px;
  }
  .global-menu {
    height: 100%;
  }
}
.global-header {
  height: 50px;
  background: #666;
}
.global-content {
  flex: 1;
}
</style>
