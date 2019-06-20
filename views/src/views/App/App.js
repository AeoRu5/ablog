import {
	mapState
} from 'vuex'
import AppConfig from '@/AppConfig.js'

export default {
	data() {
		return {
			AppConfig: AppConfig.tabBarLists
		}
	},
	computed: {
		...mapState({
			is_mobile: state => state.is_mobile,
			tabBar_actived: state => state.tabBar.component_tabBar_actived
		})
	}
}