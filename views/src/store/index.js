import Vue from 'vue'
import vuex from 'vuex'
import entry from './entry.js'
import aeorusUI_modal from './aeorusUI_modal.js'
import aeorusUI_toast from './aeorusUI_toast.js'
import aeorusUI_loading from './aeorusUI_loading.js'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    entry,
    aeorusUI_modal,
    aeorusUI_toast,
    aeorusUI_loading
  }
})