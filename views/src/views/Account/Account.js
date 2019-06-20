import {
	mapState,
	mapActions
} from 'vuex'
import defaultAvatar from '@/assets/img/defaultAvatar.png'
import Skeleton from '@/components/Skeleton/Skeleton.vue'
import defaultBackground from '@/assets/img/account_background.png'

export default {
	components: {
		Skeleton
	},
	data() {
		return {
			reloadMethod: '',
			account_avaterVisible: false,
			account_userInfoLoadedStatus: 0,
			account_backgroundVisible: false,
			account_defaultBackground: defaultBackground,
			account_defaultAvatar: `this.src="${defaultAvatar}"`,
		}
	},
	created() {
		if (!this.$isEmptyObject(this.userInfo)) {
			this.account_userInfoLoadedStatus = 1;

			return;
		} else {
			let self = this;

			this.getUserInfo({
				success() {
					self.account_userInfoLoadedStatus = 1;
				},
				fail() {
					self.account_userInfoLoadedStatus = 2;
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