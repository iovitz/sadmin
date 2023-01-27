import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('user', () => {
  // 左侧菜单的展开和收缩
  const isAsideMenuCollapse = ref(false)
  const toggleAsideMenuCollapse = () => {
    isAsideMenuCollapse.value = !isAsideMenuCollapse.value
  }
  // 暗色模式
  const isDark = ref(false)
  const setColorTheme = (v: boolean) => {
    isDark.value = v
  }

  return { isDark, setColorTheme, isAsideMenuCollapse, toggleAsideMenuCollapse }
})
