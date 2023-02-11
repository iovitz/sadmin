<template>
  <div class="inline-flex items-center">
    <slot />
    <span class="increase" v-if="props.type === 'increase'" />
    <span class="decrease" v-else />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type: 'increase' | 'decrease'
  }>(),
  {
    type: 'increase',
  }
)
</script>

<style lang="scss" scoped>
.increase,
.decrease {
  @apply ml-2 w-0 h-0;
  border-width: 0.4em;
  border-style: solid;
  position: relative;
}
.increase {
  border-color: transparent transparent red transparent;
  top: -0.15em;
}
.decrease {
  border-color: green transparent transparent transparent;
  top: 0.25em;
}
</style>
