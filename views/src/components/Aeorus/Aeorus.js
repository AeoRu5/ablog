import {
	mapState
} from 'vuex'
import CustomizeForm from './CustomizeForm/CustomizeForm.vue'
import CustomizeToast from './CustomizeToast/CustomizeToast.vue'
import CustomizeModal from './CustomizeModal/CustomizeModal.vue'
import CustomizeLoading from './CustomizeLoading/CustomizeLoading.vue'

export default {
	components: {
		CustomizeForm,
		CustomizeToast,
		CustomizeModal,
		CustomizeLoading
	},
	computed: {
		...mapState({
			is_mobile: state => state.is_mobile,
			form_show: state => state.aeorusUI_form.aeorusUI_form_isShow,
			toast_show: state => state.aeorusUI_toast.aeorusUI_toast_isShow,
			modal_show: state => state.aeorusUI_modal.aeorusUI_modal_isShow,
			loading_show: state => state.aeorusUI_loading.aeorusUI_loading_isShow,
		})
	}
}