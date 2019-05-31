export default {
	state: {
		aeorusUI_loading_isShow: false,
		aeorusUI_loading_content: ''
	},
	mutations: {
		aeorusUI_loading_show(state, params) {
			state.aeorusUI_loading_isShow = true;
			state.aeorusUI_loading_content = params;
		},
		aeorusUI_loading_hide(state) {
			state.aeorusUI_loading_isShow = false;
		}
	},
	actions: {
		aeorusUI_loading_show(ctx, params) {
			ctx.commit('aeorusUI_loading_show', params);
		},
		aeorusUI_loading_hide(ctx) {
			ctx.commit('aeorusUI_loading_hide');
		}
	}
}