import {
	mapState,
	mapActions
} from 'vuex'

export default {
	props: [ 'tabLists' ],
	methods: {
		...mapActions([
			'component_tabBar_switch'
		])
	},
	computed: {
		...mapState({
			component_tabBar_actived: state => state.tabBar.component_tabBar_actived
		})
	}
}