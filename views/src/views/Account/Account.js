import {
	mapState,
	mapActions
} from 'vuex'
import defaultAvatar from '@/assets/img/defaultAvatar.png'
import defaultBackground from '@/assets/img/account_background.png'

export default {
	data() {
		return {
			loadSuccess: false,
			reloadMethod: '',
			account_avaterVisible: false,
			account_backgroundVisible: false,
			account_defaultBackground: defaultBackground,
			account_defaultAvatar: `this.src="${defaultAvatar}"`
		}
	},
	created() {
		if (!this.$isEmptyObject(this.userInfo)) {
			this.loadSuccess = true;

			return;
		} else {
			let self = this;

			this.getUserInfo({
				success() {
					self.loadSuccess = true;
				},
				fail() {
					self.loadSuccess = false;
					self.reloadMethod = '_account_userInfo_render';
				}
			});
		}
	},
	methods: {
		...mapActions([
			'saveUserInfo',
			'getUserInfo'
		]),
		_account_avatar_rendered() {
			this.account_avaterVisible = true;
		},
		_account_background_rendered() {
			this.account_backgroundVisible = true;
		}
	},
	computed: {
		...mapState({
			userInfo: state => state.userInfo
		})
	}
}