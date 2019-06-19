import router from '../router'

export default {
	state: {
		view_entry_isAniSvgAnimationEnd: false,
		component_aniSvg_text: ''
	},
	mutations: {
		component_aniSvg_loadAniSvgText(state, callback) {
			this._vm.$requestPost('/aeoru5/aniSvgText', {

				},
				res => {
					if (res.success) {
						state.component_aniSvg_text = res.aniSvgText;

						callback && typeof callback === 'function' && callback();
					} else {
						this._vm.$showToast({
							icon: 'warn',
							content: res.message,
							duration: 2000
						});
					}
				},
				err => {
					console.log(err);
				}
			);
		},
		component_aniSvg_animationend(state) {
			state.view_entry_isAniSvgAnimationEnd = true;
		},
		view_entry_btn(state) {
			router.replace('/app');
		}
	},
	actions: {
		component_aniSvg_loadAniSvgText(ctx, callback) {
			ctx.commit('component_aniSvg_loadAniSvgText', callback);
		},
		component_aniSvg_animationend(ctx) {
			ctx.commit('component_aniSvg_animationend');
		},
		view_entry_btn(ctx) {
			ctx.commit('view_entry_btn');
		}
	}
}