import {
	mapState,
	mapActions
} from 'vuex'
import defaultAvatar from '@/assets/img/defaultAvatar.png'

export default {
	data() {
		return {
			userInfo_avaterVisible: false,
			userInfo_defaultAvatar: `this.src="${defaultAvatar}"`
		}
	},
	beforeMount() {
		if (this.$route.params.avater_upload_success) {
			this.getUserInfo({
				success() {
					this.$showToast('刷新成功~');
				},
				fail() {
					this.$router.replace(this.returnUrl[this.returnUrl.length - 1]);
					this.setNavigatorReturn({
						isReturn: true
					});
				}
			});
		} else {
			let userInfo = sessionStorage.getItem('USERINFO');

			userInfo && this.saveUserInfo(JSON.parse(userInfo));
		}
	},
	methods: {
		...mapActions([
			'getUserInfo',
			'saveUserInfo'
		]),
		_userInfo_avatar_rendered() {
			this.userInfo_avaterVisible = true;
		},
		_userInfo_avatar_upload(e) {
			this.$router.push({
				name: 'imagePreview',
				query: {
					avatarInfo: e
				}
			});
		}
	},
	computed: {
		...mapState({
			userInfo: state => state.userInfo
		})
	}
}