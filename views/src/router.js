import Vue from 'vue'
import Router from 'vue-router'
import Enter from './views/Enter/Enter.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'enter',
    component: Enter
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "enter" */ './views/Enter.vue')
  }]
})