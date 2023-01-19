import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import getRouter from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/global.scss'

const app = createApp(App)

app.use(createPinia())
app.use(await getRouter())
app.use(ElementPlus)
app.mount('#__SADMIN__')
