import store from '@/store/index.js'

let toastTimer;

export default {
	showModal({
		title = '提示',
		content = '提示内容',
		showCancel = true,
		confirm,
		cancel,
		completed
	}) {
		this.hideToast();

		store._mutations.aeorusUI_modal_show[0]({
			title,
			content,
			showCancel
		});

		store._mutations.aeorusUI_modal_confirm[0] = () => {
			store._mutations.aeorusUI_modal_showOut[0]();

			let modalTimer = setTimeout(() => {
				store._mutations.aeorusUI_modal_hide[0]();

				if (confirm) confirm();
				if (completed) completed();

				clearTimeout(modalTimer);
			}, 500);
		};

		store._mutations.aeorusUI_modal_cancel[0] = () => {
			store._mutations.aeorusUI_modal_showOut[0]();

			let modalTimer = setTimeout(() => {
				store._mutations.aeorusUI_modal_hide[0]();

				if (cancel) cancel();
				if (completed) completed();

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

			if (callback) callback();
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