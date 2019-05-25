import Vue from 'vue'
import Router from 'vue-router'
import Entry from './views/Entry/Entry.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'entry',
    component: Entry
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "enter" */ './views/Enter.vue')
  }]
})