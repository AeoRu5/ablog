import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import animate from 'animate.css'
import utils from './plugins/utils.js'
import './registerServiceWorker'

Vue.use(animate)
Vue.prototype.utils = utils;
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')