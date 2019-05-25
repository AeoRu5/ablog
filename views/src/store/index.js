import Vue from 'vue'
import vuex from 'vuex'
import dialog_entry from './dialog_entry.js'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    dialog_entry
  }
})