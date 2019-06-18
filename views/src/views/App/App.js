import {
	mapState
} from 'vuex'
import Home from './Home/Home.vue'
import TabBar from './TabBar/TabBar.vue'
import Message from './Message/Message.vue'
import Account from './Account/Account.vue'
import Navigator from './Navigator/Navigator.vue'

export default {
	components: {
		Home,
		TabBar,
		Message,
		Account,
		Navigator
	},
	data() {
		return {
			app_tab_lists: [{
				navigator: '兔走',
				tabBar: '首页',
				target: 'home',
				icon: 'icon-fire',
				functionIcon: 'icon-RectangleCopy'
			}, {
				navigator: '消息',
				tabBar: '消息',
				target: 'message',
				icon: 'icon-rocket'
			}, {
				navigator: '我的',
				tabBar: '我的',
				target: 'account',
				icon: 'icon-mobile',
				functionIcon: 'icon-settings'
			}]
		}
	},
	computed: {
		...mapState({
			is_mobile: state => state.is_mobile,
			tabBar_actived: state => state.tabBar.component_tabBar_actived
		})
	}
}