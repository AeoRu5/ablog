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
			mask_show: state => state.dialog_customize_components.component_customize_mask_isShow
		})
	}
}