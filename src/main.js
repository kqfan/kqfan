import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

function initApp() {
    const app = createApp(App)
    app.use(router)
    app.mount('#app')
}

initApp()
