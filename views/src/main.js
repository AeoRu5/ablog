import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuescroll from 'vuescroll'
import utils from './plugins/utils'
import aeorusUI from './plugins/aeorusUI'
import './registerServiceWorker'
import animate from 'animate.css'
import './assets/iconfont/iconfont.css'

Vue.use(animate)
Vue.use(vuescroll)
Vue.prototype.requestGet = utils.requestGet
Vue.prototype.requestPost = utils.requestPost
Vue.prototype.checkAnimationEnd = utils.checkAnimationEnd
Vue.prototype.showModal = aeorusUI.showModal
Vue.prototype.showToast = aeorusUI.showToast
Vue.prototype.hideToast = aeorusUI.hideToast
Vue.prototype.showLoading = aeorusUI.showLoading
Vue.prototype.hideLoading = aeorusUI.hideLoading

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')