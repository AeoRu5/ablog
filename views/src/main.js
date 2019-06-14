import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuescroll from 'vuescroll'
import app from './plugins/app'
import aeorusUI from './plugins/aeorusUI'
import './registerServiceWorker'
import animate from 'animate.css'
import './assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import './assets/iconfont/iconfont.js'

window.app = app
window.aeorus = aeorusUI
Vue.use(animate)
Vue.use(vuescroll)
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')