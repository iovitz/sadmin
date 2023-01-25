/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string //定义提示信息 数据是只读的无法被修改
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
