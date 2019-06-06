import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'entry',
    component: () => import('@/views/Entry/Entry.vue')
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue')
  }, {
  	path: '/register',
    name: 'register',
    component: () => import('@/views/Register/Register.vue')
  }, {
    path: '/app',
    name: 'app',
    component: () => import('@/views/App/App.vue')
  }]
})