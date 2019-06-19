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
		},
		getUserInfo(state, params) {
			return new Promise((resolve, reject) => {
				this._vm.$requestGet('/aeoru5/userInfo', {

					},
					res => {
						if (res.success) {
							resolve(res.userInfo);
						} else {
							this.$showToast({
								icon: 'warn',
								content: res.message,
								duration: 2000
							}, () => {
								reject();
							});
						}
					},
					err => {
						reject();
					}
				);
			}).then(userInfo => {
				userInfo.createDate = userInfo.createDate.substring(0, 10);

				this.commit('saveUserInfo', userInfo);

				params && params.success && typeof params.success === 'function' && params.success();
			}).catch(err => {
				this._vm.$showToast({
					icon: 'warn',
					content: '网络有点小问题，重试一下~'
				}, () => {
					params && params.fail && typeof params.fail === 'function' && params.fail();
				});
			});
		}
	},
	actions: {
		checkClient(ctx) {
			ctx.commit('checkClient');
		},
		saveUserInfo(ctx, params) {
			ctx.commit('saveUserInfo', params);
		},
		getUserInfo(ctx, params) {
			ctx.commit('getUserInfo', params);
		}
	}
})