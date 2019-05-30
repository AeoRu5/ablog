import Vue from 'vue'
import Router from 'vue-router'
import Entry from './views/Entry/Entry.vue'
import Register from './views/Register/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'entry',
    component: Entry
  }, {
  	path: '/register',
    name: 'register',
    component: Register
  }]
})