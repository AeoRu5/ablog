export default {
	state: {
		component_customize_mask_isShow: false,
		component_customize_modal_isShow: false,
		component_customize_modal_title: '',
		component_customize_modal_content: '',
		component_customize_modal_isShowCancel: false
	},
	mutations: {
		component_customize_mask_show(state, params) {
			state.component_customize_mask_isShow = true;
		},
		component_customize_mask_hide(state) {
			state.component_customize_mask_isShow = false;
		},
		component_customize_modal_show(state, params) {
			state.component_customize_modal_isShow = true;
			state.component_customize_modal_title = params.title;
			state.component_customize_modal_content = params.content;
			state.component_customize_modal_isShowCancel = params.showCancel;
		},
		component_customize_modal_hide(state) {
			state.component_customize_modal_isShow = false;
		},
		component_customize_modal_confirm(state) {},
		component_customize_modal_cancel(state) {},
		component_customize_modal_completed(state) {}
	},
	actions: {
		component_customize_mask_show(ctx) {
			ctx.commit('component_customize_mask_show');
		},
		component_customize_mask_hide(ctx,) {
			ctx.commit('component_customize_mask_hide');
		},
		component_customize_modal_show(ctx, params) {
			ctx.commit('component_customize_modal_show', params);
		},
		component_customize_modal_hide(ctx) {
			ctx.commit('component_customize_modal_hide');
		},
		component_customize_modal_confirm(ctx) {
			ctx.commit('component_customize_modal_confirm');
		},
		component_customize_modal_cancel(ctx) {
			ctx.commit('component_customize_modal_cancel');
		},
		component_customize_modal_completed(ctx) {
			ctx.commit('component_customize_modal_completed');
		}
	}
}