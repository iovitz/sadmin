<template>
  <CommonDataCard title="交易用户数" :value="4142">
    <div class="w-full h-full" ref="chartRef" />
    <template #footer> 交易用户数: 23142 </template>
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
        color: ['#3398DB'],
        tooltip: {},
        series: [
          {
            name: '用户实时交易量',
            type: 'bar',
            data: Array(15)
              .fill(0)
              .map(() => 150 + Math.floor(Math.random() * 150)),
            barWidth: '60%',
          },
        ],
        xAxis: {
          type: 'category',
          data: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
          show: false,
        },
        yAxis: {
          show: false,
        },
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        },
      })
    }
  }
})
</script>

<style lang="scss" scoped></style>
