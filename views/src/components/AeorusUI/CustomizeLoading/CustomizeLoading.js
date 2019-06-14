import {
	mapState
} from 'vuex'

export default {
	computed: {
		...mapState({
			loading_show: state => state.aeorusUI_loading.aeorusUI_loading_isShow,
			loading_content: state => state.aeorusUI_loading.aeorusUI_loading_content,
		})
	}
}