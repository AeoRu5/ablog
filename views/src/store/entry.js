import router from '../router'

export default {
	state: {
		view_entry_isAniSvgAnimationEnd: false,
		component_aniSvg_aniSvgTxt: ''
	},
	mutations: {
		component_aniSvg_loadAniSvgTxt(state, callback) {
			this._vm.$showLoading();

			this._vm.$requestPost('/aeoru5/aniSvgTxt', {

				},
				res => {
					this._vm.$hideLoading();

					if (res.success) {
						state.component_aniSvg_aniSvgTxt = res.aniSvgTxt;

						callback && callback();
					} else {
						this._vm.$showToast({
							icon: 'warn',
							content: res.message,
							duration: 2000
						});
					}
				},
				err => {
					this._vm.$hideLoading();
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
		component_aniSvg_loadAniSvgTxt(ctx, callback) {
			ctx.commit('component_aniSvg_loadAniSvgTxt', callback);
		},
		component_aniSvg_animationend(ctx) {
			ctx.commit('component_aniSvg_animationend');
		},
		view_entry_btn(ctx) {
			ctx.commit('view_entry_btn');
		}
	}
}