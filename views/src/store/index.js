import Vue from 'vue'
import vuex from 'vuex'
import entry from './entry.js'
import tabBar from './tabBar.js'
import aeorusUI_modal from './aeorusUI_modal.js'
import aeorusUI_toast from './aeorusUI_toast.js'
import aeorusUI_loading from './aeorusUI_loading.js'

Vue.use(vuex)

export default new vuex.Store({
	modules: {
		entry,
		tabBar,
		aeorusUI_modal,
		aeorusUI_toast,
		aeorusUI_loading
	},
	state: {
		userInfo: {},
		is_mobile: false
	},
	mutations: {
		checkClient(state) {
			let is_mobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

			if (is_mobile) {
				state.is_mobile = true;
			} else {
				state.is_mobile = false;
			}

			window.onresize = () => {
				is_mobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

				if (is_mobile) {
					state.is_mobile = true;
				} else {
					state.is_mobile = false;
				}
			}
		},
		saveUserInfo(state, params) {
			state.userInfo = Object.assign({}, params);
			sessionStorage.setItem('USERINFO', JSON.stringify(state.userInfo));
		}
	},
	actions: {
		checkClient(ctx) {
			ctx.commit('checkClient');
		},
		saveUserInfo(ctx, params) {
			ctx.commit('saveUserInfo', params);
		}
	}
})