import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
 
import VueParticles from 'vue-particles'
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)

app.use(VueParticles)
app.use(VueSmoothScroll)
app.mount('#app')


import 'bootstrap/dist/js/bootstrap.js'
 
