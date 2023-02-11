<template>
  <CommonDataCard title="累计订单量" value-prefix="￥" :value="24335">
    <div class="w-full h-full" ref="chartRef" />
    <template #footer> 累计订单量: 24335 </template>
  </CommonDataCard>
</template>

<script setup lang="ts">
import CommonDataCard from '@/widget/common-data-card/common-data-card.vue'
import { getCurrentInstance, onMounted, ref } from 'vue'
const currentVueInstance = getCurrentInstance()
const chartRef = ref<HTMLDivElement | null>(null)
// instance?.proxy?.$echarts.init()
onMounted(() => {
  const proxy = currentVueInstance?.proxy
  console.log(proxy?.$echarts, chartRef)
  if (proxy) {
    if (chartRef.value) {
      const chart = proxy.$echarts.init(chartRef.value)
      chart.setOption({
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: 'line',
            data: Array(15)
              .fill(0)
              .map(() => 150 + Math.floor(Math.random() * 150)),
            areaStyle: {
              color: 'purple',
            },
            lineStyle: {
              width: 0,
            },
            itemStyle: {
              opacity: 0,
            },
            smooth: true,
          },
        ],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      })
    }
  }
})
</script>

<style lang="scss" scoped></style>
