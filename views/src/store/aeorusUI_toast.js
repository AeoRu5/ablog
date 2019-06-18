export default {
	state: {
		aeorusUI_toast_isShow: false,
		aeorusUI_toast_icon: '',
		aeorusUI_toast_content: ''
	},
	mutations: {
		aeorusUI_toast_show(state, params) {
			state.aeorusUI_toast_isShow = true;
			state.aeorusUI_toast_icon = params.icon;
			state.aeorusUI_toast_content = params.content;
		},
		aeorusUI_toast_hide(state) {
			state.aeorusUI_toast_isShow = false;
			state.aeorusUI_toast_icon = null;
			state.aeorusUI_toast_content = '';
		}
	},
	actions: {
		aeorusUI_toast_show(ctx, params) {
			ctx.commit('aeorusUI_toast_show', params);
		},
		aeorusUI_toast_hide(ctx) {
			ctx.commit('aeorusUI_toast_hide');
		}
	}
}