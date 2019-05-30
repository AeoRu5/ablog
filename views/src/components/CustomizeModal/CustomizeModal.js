import {
	mapState,
	mapActions
} from 'vuex'

export default {
	methods: {
		...mapActions([
			'component_customize_modal_confirm',
			'component_customize_modal_cancel'
		])
	},
	computed: {
		...mapState({
			modal_show: state => state.dialog_customize_components.component_customize_modal_isShow,
			modal_title: state => state.dialog_customize_components.component_customize_modal_title,
			modal_content: state => state.dialog_customize_components.component_customize_modal_content,
			cancel_show: state => state.dialog_customize_components.component_customize_modal_isShowCancel
		})
	}
}