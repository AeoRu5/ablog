export default {
	state: {
		aeorusUI_form_isShow: false,
		aeorusUI_form_isShowIn: false,
		aeorusUI_form_input: '',
		aeorusUI_form_value: '',
		aeorusUI_form_placeholder: '',
	},
	mutations: {
		aeorusUI_form_show(state, params) {
			state.aeorusUI_form_isShow = true;
			state.aeorusUI_form_isShowIn = true;
			state.aeorusUI_form_input = params.input;
			state.aeorusUI_form_placeholder = params.placeholder;
		},
		aeorusUI_form_hide(state) {
			state.aeorusUI_form_isShow = false;
		},
		aeorusUI_form_showOut(state) {
			state.aeorusUI_form_isShowIn = false;
		},
		aeorusUI_form_reset(state) {
			state.aeorusUI_form_value = '';
		},
		aeorusUI_form_confirm(state) {},
		aeorusUI_form_cancel(state) {}
	},
	actions: {
		aeorusUI_form_show(ctx, params) {
			ctx.commit('aeorusUI_form_show', params);
		},
		aeorusUI_form_hide(ctx) {
			ctx.commit('aeorusUI_form_hide');
		},
		aeorusUI_form_showOut(ctx) {
			ctx.commit('aeorusUI_form_showOut');
		},
		aeorusUI_form_reset(ctx) {
			ctx.commit('aeorusUI_form_reset');
		},
		aeorusUI_form_confirm(ctx) {
			ctx.commit('aeorusUI_form_confirm');
		},
		aeorusUI_form_cancel(ctx) {
			ctx.commit('aeorusUI_form_cancel');
		}
	}
}