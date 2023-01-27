import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import getRouter from '@/router'
import ElementPlus from 'element-plus'
import '@/style/tailwind.scss'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/style/global.scss'
import 'nprogress/nprogress.css'

const app = createApp(App)

app.use(createPinia())
app.use(await getRouter())
app.use(ElementPlus)
app.mount('#__SADMIN__')
