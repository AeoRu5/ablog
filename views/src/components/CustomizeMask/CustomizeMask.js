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
			modal_show: state => state.dialog_customize_modal.component_customize_modal_isShow
		})
	}
}