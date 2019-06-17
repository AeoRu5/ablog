import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import app from './plugins/app'
import animate from 'animate.css'
import aeorus from './plugins/aeorus'
import './registerServiceWorker'
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'
/* 全局组件 */
import NetError from './components/NetError/NetError.vue'
import Constructing from './components/Constructing/Constructing.vue'

Vue.use(app)
Vue.use(aeorus)
Vue.use(animate)
/* 全局组件 */
Vue.component('NetError', NetError)
Vue.component('Constructing', Constructing)
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')