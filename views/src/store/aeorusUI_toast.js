export default {
	state: {
		aeorusUI_toast_isShow: false,
		aeorusUI_toast_mask_isShow: false,
		aeorusUI_toast_content: ''
	},
	mutations: {
		aeorusUI_toast_show(state, params) {
			state.aeorusUI_toast_isShow = true;
			state.aeorusUI_toast_content = params.content;
			state.aeorusUI_toast_mask_isShow = params.mask;
		},
		aeorusUI_toast_hide(state) {
			state.aeorusUI_toast_isShow = false;
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