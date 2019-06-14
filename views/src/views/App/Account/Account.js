import {
	mapState,
	mapActions
} from 'vuex'
import defaultAvater from '@/assets/img/usagi.jpg'

export default {
	data() {
		return {
			avater: defaultAvater
		}
	},
	created() {
		this._component_account_userInfo_get().then(userInfo => {
			this.saveUserInfo(userInfo);
		});
	},
	methods: {
		...mapActions([
			'saveUserInfo',
			'component_account_function_switch'
		]),
		_component_account_userInfo_get() {
			return new Promise((resolve, reject) => {
				app.getUserInfo(userInfo => {
					resolve(userInfo);
				});
			});
		}
	},
	computed: {
		...mapState({
			userInfo: state => state.userInfo
		})
	},
}