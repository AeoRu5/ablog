import less from 'less'

export default {
	state: {
		view_entry_isAniSvgAnimationEnd: false,
		component_aniSvg_aniSvgTxt: ''
	},
	mutations: {
		component_aniSvg_loadAniSvgTxt(state) {
			this._vm.utils.requestPost('/aeoru5/aniSvgTxt', {

			},
			res => {
				if (res.success) {
					state.component_aniSvg_aniSvgTxt = res.aniSvgTxt;
				} else {
					this.aeorusUI.showToast({
						content: res.message,
						duration: 2000
					});
				}
			},
			err => {
				console.log(err);
			});
		},
		component_aniSvg_animationend(state) {
			state.view_entry_isAniSvgAnimationEnd = true;
		}
	},
	actions: {
		component_aniSvg_loadAniSvgTxt(ctx) {
			ctx.commit('component_aniSvg_loadAniSvgTxt');
		},
		component_aniSvg_animationend(ctx) {
			ctx.commit('component_aniSvg_animationend');
		}
	}
}