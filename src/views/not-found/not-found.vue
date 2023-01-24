<template>
  <el-result icon="warning" title="404 Not Found" sub-title="当前页面不存在">
    <template #extra>
      <el-button type="primary" @click="handleBackToIndex">Back</el-button>
    </template>
  </el-result>
</template>
<script setup lang="ts">
const handleBackToIndex = () => {
  console.log('回到首页')
}
</script>
<style lang="scss"></style>
