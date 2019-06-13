import {
	mapState
} from 'vuex'

export default {
	props: [ 'tabLists' ],
	computed: {
		...mapState({
			component_tabBar_actived: state => state.tabBar.component_tabBar_actived
		})
	}
}