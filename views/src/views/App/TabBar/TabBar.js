import {
	mapState,
	mapActions
} from 'vuex'

export default {
	props: [ 'app_tab_lists' ],
	methods: {
		...mapActions([
			'component_tabBar_switch'
		])
	},
	created() {
		this.app_tab_lists.map(tabList => {
			tabList.activeIcon = `${tabList.icon}-fill`
		});
	},
	computed: {
		...mapState({
			tabBar_actived: state => state.tabBar.component_tabBar_actived
		})
	}
}