import {
	mapState
} from 'vuex'

export default {
	computed: {
		...mapState({
			toast_show: state => state.aeorusUI_toast.aeorusUI_toast_isShow,
			toast_mask_show: state => state.aeorusUI_toast.aeorusUI_toast_mask_isShow,
			toast_content: state => state.aeorusUI_toast.aeorusUI_toast_content
		})
	}
}