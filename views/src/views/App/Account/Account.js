import {
	mapState,
	mapActions
} from 'vuex'
import defaultAvater from '@/assets/img/usagi.jpg'

export default {
	data() {
		return {
			avater: defaultAvater,
			reloadMethod: '',
			isUserInfoLoadedStatus: 0
		}
	},
	created() {
		if (!this.$isEmptyObject(this.userInfo)) {
			this.isUserInfoLoadedStatus = 1;

			return;
		} else {
			this._component_account_userInfo_render();
		}
	},
	methods: {
		...mapActions([
			'saveUserInfo'
		]),
		_component_account_userInfo_get() {
			return new Promise((resolve, reject) => {
				this.$getUserInfo(userInfo => {
					resolve(userInfo);
				}, err => {
					reject(err);
				});
			});
		},
		_component_account_userInfo_render() {
			this._component_account_userInfo_get().then(userInfo => {
				this.isUserInfoLoadedStatus = 1;
				this.saveUserInfo(userInfo);
			}).catch(err => {
				console.log(err);
				this.isUserInfoLoadedStatus = 2;
				this.reloadMethod = '_component_account_userInfo_render';
			})
		}
	},
	computed: {
		...mapState({
			userInfo: state => state.userInfo
		})
	}
}