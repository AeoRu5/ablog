import {
	mapState
} from 'vuex'
import Home from '@/components/Home/Home.vue'
import TabBar from '@/components/TabBar/TabBar.vue'
import Account from '@/components/Account/Account.vue'
import Navigator from '@/components/Navigator/Navigator.vue'

export default {
	components: {
		Home,
		TabBar,
		Account,
		Navigator
	},
	data() {
		return {
			tabLists: [{
				navigator: '兔走',
				tabBar: '首页',
				target: 'home',
				icon: 'icon-fire'
			}, {
				navigator: '我的',
				tabBar: '我的',
				target: 'account',
				icon: 'icon-mobile'
			}]
		}
	},
	computed: {
		...mapState({
			is_mobile: state => state.is_mobile,
			component_tabBar_actived: state => state.tabBar.component_tabBar_actived
		})
	}
}