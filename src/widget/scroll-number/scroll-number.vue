<template>
  <div>{{ number.toFixed(props.fixed) }}</div>
</template>
<script lang="ts" setup>
import gsap from 'gsap'
import { ref, watch } from 'vue'

const props = defineProps<{
  value: number
  fixed: number
}>()

const number = ref(0)

function scrollAnimate() {
  gsap.to(number, {
    duration: 1,
    value: props.value,
  })
}

scrollAnimate()

watch(() => props.value, scrollAnimate)
</script>
<style lang="scss" scoped></style>
