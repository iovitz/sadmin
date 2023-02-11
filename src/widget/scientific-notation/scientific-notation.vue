<template>
  {{ formatedData }}
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    value: number
  }>(),
  {
    value: 0,
  }
)

function scientificNotationFormat(num: number) {
  var res = num.toString().replace(/\d+/, function (n: string) {
    // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + ','
    })
  })
  return res
}

const formatedData = computed(() => {
  return scientificNotationFormat(props.value)
})
</script>

<style lang="scss" scoped></style>
