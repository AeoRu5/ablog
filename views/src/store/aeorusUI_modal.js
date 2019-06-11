export default {
	state: {
		aeorusUI_modal_isShow: false,
		aeorusUI_modal_isShowIn: false,
		aeorusUI_modal_title: '',
		aeorusUI_modal_content: '',
		aeorusUI_modal_isShowCancel: false
	},
	mutations: {
		aeorusUI_modal_show(state, params) {
			state.aeorusUI_modal_isShow = true;
			state.aeorusUI_modal_isShowIn = true;
			state.aeorusUI_modal_title = params.title;
			state.aeorusUI_modal_content = params.content;
			state.aeorusUI_modal_isShowCancel = params.showCancel;
		},
		aeorusUI_modal_hide(state) {
			state.aeorusUI_modal_isShowIn = false;
			state.aeorusUI_modal_isShow = false;
			// this._vm.checkAnimationEnd(this._vm.$refs.aeorusUI_modal_frame, 'animationend', () => {
			// 	state.aeorusUI_modal_isShow = false;
			// });
			// this._vm.checkAnimationEnd(this._vm.$refs.aeorusUI_modal_frame, 'webkitAnimationEnd', () => {
			// 	state.aeorusUI_modal_isShow = false;
			// });
		},
		aeorusUI_modal_confirm(state) {},
		aeorusUI_modal_cancel(state) {}
	},
	actions: {
		aeorusUI_modal_show(ctx, params) {
			ctx.commit('aeorusUI_modal_show', params);
		},
		aeorusUI_modal_hide(ctx) {
			ctx.commit('aeorusUI_modal_hide');
		},
		aeorusUI_modal_confirm(ctx) {
			ctx.commit('aeorusUI_modal_confirm');
		},
		aeorusUI_modal_cancel(ctx) {
			ctx.commit('aeorusUI_modal_cancel');
		}
	}
}