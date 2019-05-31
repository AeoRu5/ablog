import {
	mapState
} from 'vuex'
import CustomizeLoading from '@/components/CustomizeLoading/CustomizeLoading.vue'

export default {
	components: {
		CustomizeLoading
	},
	computed: {
		...mapState({
			loading_show: state => state.aeorusUI_loading.aeorusUI_loading_isShow,
			loading_content: state => state.aeorusUI_loading.aeorusUI_loading_content,
		})
	}
}