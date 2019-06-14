import {
	mapState,
	mapActions
} from 'vuex'

export default {
	methods: {
		...mapActions([
			'aeorusUI_modal_confirm',
			'aeorusUI_modal_cancel'
		])
	},
	computed: {
		...mapState({
			modal_show: state => state.aeorusUI_modal.aeorusUI_modal_isShow,
			modal_isShowIn: state => state.aeorusUI_modal.aeorusUI_modal_isShowIn,
			modal_title: state => state.aeorusUI_modal.aeorusUI_modal_title,
			modal_content: state => state.aeorusUI_modal.aeorusUI_modal_content,
			cancel_show: state => state.aeorusUI_modal.aeorusUI_modal_isShowCancel
		})
	}
}