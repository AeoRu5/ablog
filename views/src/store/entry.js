import router from '../router'

export default {
	state: {
		view_entry_isAniSvgAnimationEnd: false,
		component_aniSvg_aniSvgTxt: ''
	},
	mutations: {
		component_aniSvg_loadAniSvgTxt(state, callback) {
			this._vm.utils.requestPost('/aeoru5/aniSvgTxt', {

			},
			res => {
				if (res.success) {
					state.component_aniSvg_aniSvgTxt = res.aniSvgTxt;

					if (callback) callback();
				} else {
					this._vm.aeorusUI.showToast({
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
		},
		view_entry_clickEnterBtn(state) {
			if (this._vm.utils.checkClient()) {
				console.log("手机端");
				router.replace('/app');
			} else {
				console.log("pc端");
				router.replace('/web');
			}
		}
	},
	actions: {
		component_aniSvg_loadAniSvgTxt(ctx, callback) {
			ctx.commit('component_aniSvg_loadAniSvgTxt', callback);
		},
		component_aniSvg_animationend(ctx) {
			ctx.commit('component_aniSvg_animationend');
		},
		view_entry_clickEnterBtn(ctx) {
			ctx.commit('view_entry_clickEnterBtn');
		}
	}
}