import {
	mapState,
	mapActions
} from 'vuex'

export default {
	data() {
		return {
			dynamic_form_items: []
		}
	},
	created() {
		this.form_items.map((item, index) => {
			this.dynamic_form_items.push({
				property: item.property,
				placeholder: item.placeholder
			});
		});
	},
	methods: {
		...mapActions([
			'aeorusUI_form_confirm',
			'aeorusUI_form_cancel'
		])
	},
	computed: {
		...mapState({
			form_input: state => state.aeorusUI_form.aeorusUI_form_input,
			form_items: state => state.aeorusUI_form.aeorusUI_form_items,
			form_show: state => state.aeorusUI_form.aeorusUI_form_isShow,
			form_isShowIn: state => state.aeorusUI_form.aeorusUI_form_isShowIn,
			form_placeholder: state => state.aeorusUI_form.aeorusUI_form_placeholder
		})
	}
}