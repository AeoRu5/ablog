import Vue from 'vue'
import vuex from 'vuex'
import dialog_entry from './dialog_entry.js'
import dialog_customize_components from './dialog_customize_components.js'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    dialog_entry,
    dialog_customize_components
  }
})