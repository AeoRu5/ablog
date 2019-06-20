import Account from '@/views/Account/Account.vue'
import Home from '@/views/Home/Home.vue'
import Message from '@/views/Message/Message.vue'

let tabBarLists = [{
	path: 'Home',
	tabBar: '首页',
	target: 'home',
	component: Home,
	icon: 'icon-fire',
	activeIcon: 'icon-fire-fill'
}, {
	path: 'Message',
	tabBar: '消息',
	target: 'message',
	component: Message,
	icon: 'icon-rocket',
	activeIcon: 'icon-rocket-fill'
}, {
	path: 'Account',
	tabBar: '我的',
	target: 'account',
	component: Account,
	icon: 'icon-mobile',
	activeIcon: 'icon-mobile-fill'
}];

let App = {
	tabBarLists,
	navigator: '兎走'
}
export default App;