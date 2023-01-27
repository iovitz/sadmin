<template>
  <el-drawer v-model="isOpen">
    <template #header>
      <h4>set title by slot</h4>
    </template>
    <template #default>
      <div>
        <h1>123</h1>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">cancel</el-button>
        <el-button type="primary" @click="confirmClick">confirm</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps<{
  modelValue: boolean
}>()

const isOpen = ref(props.modelValue)

watch(isOpen, v => {
  emit('update:modelValue', v)
})

const cancelClick = () => {
  console.log('点击取消')
}
const confirmClick = () => {
  console.log('点击确认')
}
</script>
<style lang="scss" scoped></style>
