import {
	mapState
} from 'vuex'

export default {
	props: [ 'app_tab_lists' ],
	computed: {
		...mapState({
			tabBar_actived: state => state.tabBar.component_tabBar_actived
		})
	}
}