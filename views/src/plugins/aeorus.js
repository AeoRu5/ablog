import store from '@/store/index.js'
import Aeorus from '@/components/Aeorus/Aeorus.vue'
let toastTimer;

export default {
	install(Vue, options) {
		Vue.component('Aeorus', Aeorus);
		Vue.prototype.$showForm = this.showForm;
		Vue.prototype.$showModal = this.showModal;
		Vue.prototype.$showToast = this.showToast;
		Vue.prototype.$hideToast = this.hideToast;
		Vue.prototype.$showLoading = this.showLoading;
		Vue.prototype.$hideLoading = this.hideLoading;
	},
	showForm({
		input,
		items,
		confirm,
		cancel,
		completed
	}) {
		store._mutations.aeorusUI_form_show[0]({
			input,
			items
		});

		store._mutations.aeorusUI_form_confirm[0] = params => {
			confirm && typeof confirm === 'function' && confirm(params);
			completed && typeof completed === 'function' && completed();
		};

		store._mutations.aeorusUI_form_cancel[0] = () => {
			store._mutations.aeorusUI_form_showOut[0]();

			let formTimer = setTimeout(() => {
				store._mutations.aeorusUI_form_hide[0]();

				cancel && typeof cancel === 'function' && cancel();
				completed && typeof completed === 'function' && completed();

				clearTimeout(formTimer);
			}, 500);
		};
	},
	showModal({
		title = '提示',
		content = '提示内容',
		showCancel = true,
		confirm,
		cancel,
		completed
	}) {
		this.$hideToast();

		store._mutations.aeorusUI_modal_show[0]({
			title,
			content,
			showCancel
		});

		store._mutations.aeorusUI_modal_confirm[0] = () => {
			store._mutations.aeorusUI_modal_showOut[0]();

			let modalTimer = setTimeout(() => {
				store._mutations.aeorusUI_modal_hide[0]();

				confirm && typeof confirm === 'function' && confirm();
				completed && typeof completed === 'function' && completed();

				clearTimeout(modalTimer);
			}, 500);
		};

		store._mutations.aeorusUI_modal_cancel[0] = () => {
			store._mutations.aeorusUI_modal_showOut[0]();

			let modalTimer = setTimeout(() => {
				store._mutations.aeorusUI_modal_hide[0]();

				cancel && typeof cancel === 'function' && cancel();
				completed && typeof completed === 'function' && completed();

				clearTimeout(modalTimer);
			}, 500);
		};
	},
	showToast(params, callback) {
		let duration = 1000,
			icon = null;

		if (typeof params == 'string') {
			store._mutations.aeorusUI_toast_show[0]({
				content: params
			});
		} else if (typeof params == 'object') {
			if (params.icon) {
				icon = params.icon;
			}

			if (params.duration) {
				duration = params.duration;
			}

			store._mutations.aeorusUI_toast_show[0]({
				icon,
				content: params.content
			});
		}

		toastTimer = setTimeout(() => {
			store._mutations.aeorusUI_toast_hide[0]();

			callback && typeof callback === 'function' && callback();
			clearTimeout(toastTimer);
		}, duration);
	},
	hideToast() {
		clearTimeout(toastTimer);
		store._mutations.aeorusUI_toast_hide[0]();
	},
	showLoading(content = '加载中') {
		store._mutations.aeorusUI_loading_show[0](content);
	},
	hideLoading() {
		store._mutations.aeorusUI_loading_hide[0]();
	}
}