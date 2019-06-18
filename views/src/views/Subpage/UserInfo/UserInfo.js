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
			this._userInfo_render();
		} else {
			let userInfo = sessionStorage.getItem('USERINFO');

			userInfo && this.saveUserInfo(JSON.parse(userInfo));
		}
	},
	mounted() {
		this.userInfo.createDate = this.userInfo.createDate.substring(0, 10);
	},
	methods: {
		...mapActions([
			'saveUserInfo'
		]),
		_userInfo_get() {
			return new Promise((resolve, reject) => {
				this.$getUserInfo(userInfo => {
					resolve(userInfo);
				}, err => {
					reject(err);
				});
			});
		},
		_userInfo_render() {
			this._userInfo_get().then(userInfo => {
				this.saveUserInfo(userInfo);
			}).catch(err => {
				this.$showToast({
					icon: 'warn',
					content: '网络有点小问题，重试一下~'
				})
			})
		},
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