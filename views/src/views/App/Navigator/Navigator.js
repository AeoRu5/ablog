import {
	mapState,
	mapActions
} from 'vuex'

export default {
	props: [ 'app_tab_lists' ],
	computed: {
		...mapState({
			tabBar_actived: state => state.tabBar.component_tabBar_actived
		})
	},
	methods: {
		...mapActions([
			'component_tabBar_switch'
		]),
		_navigator_return() {
			this.$router.go(-1);
		}
	}
}