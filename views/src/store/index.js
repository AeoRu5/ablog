import Vue from 'vue'
import vuex from 'vuex'
import dialog_enter from './dialog_enter.js'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    dialog_enter
  }
})