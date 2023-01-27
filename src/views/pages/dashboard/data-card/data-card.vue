<template>
  <el-row :gutter="20">
    <el-col :span="6" v-for="i in 4" :key="i">
      <el-card shadow="hover">
        <template #header>
          <div class="flex items-center justify-between">
            标题
            <el-tag size="large">年</el-tag>
          </div>
        </template>
        <el-divider />
        <ScrollNumber :value="3213" :fixed="0" />
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import ScrollNumber from '@/widget/scroll-number/scroll-number.vue'
</script>

<style lang="scss" scoped></style>
