import {
	mapState,
	mapActions
} from 'vuex'

export default {
	methods: {
		...mapActions([
			'aeorusUI_form_confirm',
			'aeorusUI_form_cancel'
		])
	},
	computed: {
		...mapState({
			form_input: state => state.aeorusUI_form.aeorusUI_form_input,
			form_value: state => state.aeorusUI_form.aeorusUI_form_value,
			form_show: state => state.aeorusUI_form.aeorusUI_form_isShow,
			form_isShowIn: state => state.aeorusUI_form.aeorusUI_form_isShowIn,
			form_placeholder: state => state.aeorusUI_form.aeorusUI_form_placeholder
		}),
		form_value: {
			get() {
				return this.$store.state.aeorusUI_form.aeorusUI_form_value;
			},
			set(val) {
				this.$store.state.aeorusUI_form.aeorusUI_form_value = val;
			}
		}
	}
}