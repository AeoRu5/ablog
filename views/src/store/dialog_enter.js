import less from 'less'

export default {
	state: {
		view_enter_isHover: false,
		view_enter_isAniSvgAnimationEnd: false,
		component_aniSvg_aniSvgTxt: ''
	},
	mutations: {
		view_enter_mouseoverEnterBtn(state) {
			state.view_enter_isHover = true;
		},
		view_enter_mouseoutEnterBtn(state) {
			state.view_enter_isHover = false;
		},
		view_enter_clickEnterBtn(state) {
			less.modifyVars({
				'@stroke': '#000000',
				'@font-size': '30px',
				'@font-color': '#000000',
				'@background-color': '#ffffff',
				'@border': '1px solid #000000',
				'@box-shadow': '-10px -10px #000000',
				'@text-shadow': '-10px -10px 10px #000000'
			});
		},
		component_aniSvg_loadAniSvgTxt(state) {
			this._vm.utils.requestGet('/aeoru5/aniSvgTxt', {}, res => {
				if (res.success) {
					state.component_aniSvg_aniSvgTxt = res.aniSvgTxt;
				} else {
					console.log(res.message);
				}
			});
		},
		component_aniSvg_animationend(state) {
			state.view_enter_isAniSvgAnimationEnd = true;
		}
	},
	actions: {
		view_enter_mouseoverEnterBtn(ctx) {
			ctx.commit('view_enter_mouseoverEnterBtn');
		},
		view_enter_mouseoutEnterBtn(ctx) {
			ctx.commit('view_enter_mouseoutEnterBtn');
		},
		view_enter_clickEnterBtn(ctx) {
			ctx.commit('view_enter_clickEnterBtn');
		},
		component_aniSvg_loadAniSvgTxt(ctx) {
			ctx.commit('component_aniSvg_loadAniSvgTxt');
		},
		component_aniSvg_animationend(ctx) {
			ctx.commit('component_aniSvg_animationend');
		}
	}
}