import store from '@/store/index.js'

export default {
	showModal({
		title = '提示',
		content = '提示内容',
		showCancel = false,
		confirm,
		cancel,
		completed
	}) {
		store._mutations.component_customize_modal_show[0]({
			title,
			content,
			showCancel
		});
		
		store._mutations.component_customize_modal_confirm[0] = () => {
			confirm();
			store._mutations.component_customize_modal_hide[0]();
		};
		store._mutations.component_customize_modal_cancel[0] = () => {
			cancel();
			store._mutations.component_customize_modal_hide[0]();
		};
		store._mutations.component_customize_modal_completed[0] = () => {
			completed();
			store._mutations.component_customize_modal_hide[0]();
		};
	}
}