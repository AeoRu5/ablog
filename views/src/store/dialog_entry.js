import less from 'less'

export default {
	state: {
		view_entry_isAniSvgAnimationEnd: false,
		component_aniSvg_aniSvgTxt: ''
	},
	mutations: {
		view_entry_clickEnterBtn(state) {

		},
		component_aniSvg_loadAniSvgTxt(state) {
			let url = '/aeoru5/aniSvgTxt';

			this._vm.utils.requestGet(url, {

			},
			res => {
				if (res.success) {
					state.component_aniSvg_aniSvgTxt = res.aniSvgTxt;
				} else {
					console.log(`${url}: ${res.message}`);
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
		view_entry_clickEnterBtn(ctx) {
			ctx.commit('view_entry_clickEnterBtn');
		},
		component_aniSvg_loadAniSvgTxt(ctx) {
			ctx.commit('component_aniSvg_loadAniSvgTxt');
		},
		component_aniSvg_animationend(ctx) {
			ctx.commit('component_aniSvg_animationend');
		}
	}
}