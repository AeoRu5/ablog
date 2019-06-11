import {
	mapState
} from 'vuex'

export default {
	computed: {
		...mapState({
			toast_show: state => state.aeorusUI_toast.aeorusUI_toast_isShow,
			icon_type: state => state.aeorusUI_toast.aeorusUI_toast_icon,
			toast_content: state => state.aeorusUI_toast.aeorusUI_toast_content
		})
	}
}