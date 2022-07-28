import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import SvgIcon from '@/icons/index'
import 'element-plus/dist/index.css'
import '@/router/permission'
import i18n from './i18n/index'
import filter from './utils/filter'

const app = createApp(App)

filter(app)
SvgIcon(app)

app.use(store).use(router).use(i18n).mount('#app')
