import {
	mapState
} from 'vuex'
import CustomizeModal from '@/components/CustomizeModal/CustomizeModal.vue'

export default {
	components: {
		CustomizeModal
	},
	computed: {
		...mapState({
			modal_show: state => state.aeorusUI_modal.aeorusUI_modal_isShow
		})
	}
}