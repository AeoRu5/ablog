import {
	mapState
} from 'vuex'

export default {
	computed: {
		...mapState({
			component_tabBar_actived: state => state.tabBar.component_tabBar_actived
		})
	}
}