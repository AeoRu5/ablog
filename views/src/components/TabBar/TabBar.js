import {
	mapState,
	mapActions
} from 'vuex'

export default {
	methods: {
		...mapActions([
			'component_tabBar_switch'
		])
	},
	computed: {
		...mapState({
			app_tab_lists: state => state.tabBar.app_tab_lists,
			tabBar_actived: state => state.tabBar.component_tabBar_actived
		})
	}
}