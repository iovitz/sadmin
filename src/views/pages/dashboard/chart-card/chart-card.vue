<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <chart-card-item1 />
    </el-col>
    <el-col :span="6">
      <chart-card-item2 />
    </el-col>
    <el-col :span="6">
      <chart-card-item3 />
    </el-col>
    <el-col :span="6">
      <chart-card-item4 />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import chartCardItem1 from './char-card-items/chart-card-item1.vue'
import chartCardItem2 from './char-card-items/chart-card-item2.vue'
import chartCardItem3 from './char-card-items/chart-card-item3.vue'
import chartCardItem4 from './char-card-items/chart-card-item4.vue'
</script>

<style lang="scss" scoped></style>
