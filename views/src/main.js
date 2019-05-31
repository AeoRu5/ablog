import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './plugins/utils.js'
import aeorusUI from './plugins/aeorusUI.js'
import './registerServiceWorker'
import animate from 'animate.css'
import './assets/iconfont/iconfont.css'

Vue.use(animate)
Vue.prototype.utils = utils;
Vue.prototype.aeorusUI = aeorusUI;
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')