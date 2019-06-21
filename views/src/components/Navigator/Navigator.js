import {
	mapState,
	mapActions
} from 'vuex'

export default {
	data() {
		return {
			navigator: '兔走'
		}
	},
	methods: {
		...mapActions([
			'setNavigatorReturn'
		]),
		_navigator_return() {
			this.$router.replace(this.returnUrl[this.returnUrl.length - 1]);
			this.setNavigatorReturn({
				isReturn: true
			});
		}
	},
	computed: {
		...mapState({
			returnUrl: state => state.returnUrl,
			currentUrl: state => state.currentUrl
		})
	}
}