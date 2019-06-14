import {
	mapState,
	mapActions
} from 'vuex'
import UserInfo from './UserInfo/UserInfo.vue'
import Navigator from '@/views/App/Navigator/Navigator.vue'

export default {
	components: {
		UserInfo,
		Navigator
	},
	data() {
		return {
			tabLists: []
		}
	},
	beforeMount() {
		let userInfo = sessionStorage.getItem('USERINFO');

		if (userInfo) {
			this.saveUserInfo(JSON.parse(userInfo));
		}
	},
	created() {
		let target = this.$route.query.target,
			navigator = '';

		if (target == 'userInfo') {
			navigator = '我的资料';
		}

		this.tabLists.push({
			navigator,
			alwaysShow: true
		});
	},
	methods: {
		...mapActions([
			'saveUserInfo'
		])
	},
	computed: {
		...mapState({
			userInfo: state => state.userInfo,
			is_mobile: state => state.is_mobile,
			component_tabBar_actived: state => state.tabBar.component_tabBar_actived
		})
	}
}