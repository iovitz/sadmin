/// <reference types="vite/client" />
import echarts from 'echarts'

declare module 'vue' {
  interface ComponentCustomProperties {
    $http: typeof axios
    $translate: (key: string) => string
    $echarts: typeof echarts
  }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string //定义提示信息 数据是只读的无法被修改
}

export {}
