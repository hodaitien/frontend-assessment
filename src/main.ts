import '@/assets/styles/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80
})

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')
