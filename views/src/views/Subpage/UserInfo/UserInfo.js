import {
	mapState,
	mapActions
} from 'vuex'
import defaultAvatar from '@/assets/img/defaultAvatar.png'

export default {
	props: [ 'avater_upload_success' ],
	data() {
		return {
			userInfo_avaterVisible: false,
			userInfo_defaultAvatar: `this.src="${defaultAvatar}"`
		}
	},
	beforeMount() {
		if (this.avater_upload_success) {
			this.getUserInfo();
		} else {
			let userInfo = sessionStorage.getItem('USERINFO');

			userInfo && this.saveUserInfo(JSON.parse(userInfo));
		}
	},
	methods: {
		...mapActions([
			'saveUserInfo',
			'getUserInfo'
		]),
		_userInfo_avatar_rendered() {
			this.userInfo_avaterVisible = true;
		},
		_userInfo_avatar_upload(e) {
			this.$emit('_userInfo_avatar_preview', {
				isSelected: true,
				avatarInfo: e
			});
		}
	},
	computed: {
		...mapState({
			userInfo: state => state.userInfo
		})
	}
}