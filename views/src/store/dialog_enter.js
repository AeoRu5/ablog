import less from 'less'

export default {
	state: {
		view_enter_isHover: false,
		view_enter_isAniSvgAnimationEnd: false,
		component_aniSvg_aniSvgTxt: '',
		toggleColor: '#000000',
		toggleFontSize: '24px'
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
				'@stroke': state.toggleColor,
				'@font-size': state.toggleFontSize,
				'@font-color': state.toggleColor,
				'@background-color': state.toggleColor == '#000000' ? '#ffffff' : '#000000',
				'@border': '1px solid ' + state.toggleColor,
				'@box-shadow': '-10px -10px ' + state.toggleColor,
				'@text-shadow': '-10px -10px 10px ' + state.toggleColor
			});

			state.toggleColor = state.toggleColor == '#000000' ? '#ffffff': '#000000';
			state.toggleFontSize = state.toggleFontSize == '24px' ? '30px' : '24px';
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