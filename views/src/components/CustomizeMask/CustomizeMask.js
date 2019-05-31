import {
	mapState
} from 'vuex'
import CustomizeModal from '@/components/CustomizeModal/CustomizeModal.vue'
import CustomizeLoading from '@/components/CustomizeLoading/CustomizeLoading.vue'

export default {
	components: {
		CustomizeModal,
		CustomizeLoading
	},
	computed: {
		...mapState({
			modal_show: state => state.aeorusUI_modal.aeorusUI_modal_isShow,
			loading_show: state => state.aeorusUI_loading.aeorusUI_loading_isShow
		})
	}
}