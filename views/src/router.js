import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/',
		name: 'entry',
		component: () =>
			import ('@/views/Entry/Entry.vue'),
		meta: {
			keepAlive: false
		}
	}, {
		path: '/login',
		name: 'login',
		component: () =>
			import ('@/views/Login/Login.vue'),
		meta: {
			keepAlive: false
		}
	}, {
		path: '/register',
		name: 'register',
		component: () =>
			import ('@/views/Register/Register.vue'),
		meta: {
			keepAlive: false
		}
	}, {
		path: '/app',
		name: 'app',
		component: () =>
			import ('@/views/App/App.vue'),
		meta: {
			keepAlive: true
		}
	}, {
		path: '/userInfo',
		name: 'userInfo',
		component: () =>
			import ('@/views/Account/UserInfo/UserInfo.vue'),
		meta: {
			keepAlive: false
		}
	}, {
		path: '/imagePreview',
		name: 'imagePreview',
		component: () =>
			import ('@/views/Account/ImagePreview/ImagePreview.vue'),
		meta: {
			keepAlive: false
		}
	}]
})