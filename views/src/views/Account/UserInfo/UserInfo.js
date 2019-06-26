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
			this._userInfo_refresh();
		} else {
			let userInfo = sessionStorage.getItem('USERINFO');

			userInfo && this.saveUserInfo(JSON.parse(userInfo));
		}
	},
	methods: {
		...mapActions([
			'getUserInfo',
			'saveUserInfo',
			'aeorusUI_form_hide',
			'aeorusUI_form_showOut'
		]),
		_userInfo_refresh(callback) {
			let self = this;

			this.getUserInfo({
				success() {
					self.$showToast('更新成功~');

					callback && typeof callback === 'function' && callback();
				},
				fail() {
					self.$router.replace(self.returnUrl[self.returnUrl.length - 1]);
					self.setNavigatorReturn({
						isReturn: true
					});
				}
			});
		},
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
		},
		_userInfo_nickname_update() {
			let self = this;

			this.$showForm({
				input: 'text',
				items: [{
					property: 'nickname',
					placeholder: '请输入新的昵称'
				}],
				confirm(res) {
					let data = {},
						isAllInputed = true;

					res.map(item => {
						if (!item.value) {
							isAllInputed = false;

							self.$showToast({
								icon: 'warn',
								content: item.placeholder,
								duration: 2000
							});
						} else {
							data[item.property] = item.value;
						}
					});

					if (isAllInputed) {
						self.$post('/aeoru5/updateUserInfo', {
								data
							},
							res => {
								if (res.success) {
									self.aeorusUI_form_showOut();

									let formTimer = setTimeout(() => {
										self.aeorusUI_form_hide();
										self._userInfo_refresh();

										clearTimeout(formTimer);
									}, 500);

								} else {
									self.$showToast({
										icon: 'warn',
										content: res.message,
										duration: 2000
									});
								}
							},
							err => {
								self.$showToast({
									icon: 'netError',
									content: '你的网络大概炸了?',
									duration: 2000
								});
							}
						);
					}
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