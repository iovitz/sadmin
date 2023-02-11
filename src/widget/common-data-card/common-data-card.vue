<template>
  <el-card>
    <div class="text-sm">{{ props.title }}</div>
    <h1 class="text-3xl font-black my-2" :style="{ color: valueColor }">{{ props.valuePrefix }}<ScientificNotation :value="props.value" /></h1>
    <div :style="{ height: `${chartHeight}px` }">
      <slot />
    </div>
    <el-divider direction="horizontal" class="devider-line" />
    <div>
      <slot name="footer" />
    </div>
  </el-card>
</template>

<script setup lang="ts">
import ScientificNotation from '@/widget/scientific-notation/scientific-notation.vue'

const props = withDefaults(
  defineProps<{
    title: string
    value: number
    valueColor?: string
    valuePrefix?: string
    chartHeight?: number
  }>(),
  {
    title: '',
    value: 0,
    valueColor: '#000000',
    valuePrefix: '',
    chartHeight: 60,
  }
)
</script>

<style lang="scss" scoped>
.devider-line {
  @apply my-2;
}
</style>
