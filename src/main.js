import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
 
import VueParticles from 'vue-particles'
import VueSmoothScroll from 'vue3-smooth-scroll'
import router from './router'
 
import VueObserveVisibility from 'vue-observe-visibility'

const app = createApp(App).use(router)

app.use(VueParticles)
app.use(VueSmoothScroll)
app.mount('#app')
app.use(VueObserveVisibility)
app.use(router)


import 'bootstrap/dist/js/bootstrap.js'
 
