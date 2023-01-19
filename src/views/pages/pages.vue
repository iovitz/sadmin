<template>
  <div class="global-container">
    <aside class="left-menu-bar">
      <el-menu default-active="1-1" class="global-menu" :collapse="isCollapse" @change="hanleChange">
        <h1 class="left-menu-logo">LOGO</h1>
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
    </aside>
    <div class="global-right-size">
      <header class="global-page-header">2</header>
      <div class="global-content-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const isCollapse = ref(false)
const hanleChange = (key: string, keyPath: string[]) => {
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
  width: 250px;
  .left-menu-logo {
    text-align: center;
    line-height: 50px;
    font-weight: bold;
  }
  .global-menu {
    height: 100%;
    border-right: none;
  }
}
.global-page-header {
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
.global-right-size {
  flex: 1;
}
.global-content-wrapper {
  padding: 20px;
}
</style>
