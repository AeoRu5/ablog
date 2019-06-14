import {
	mapActions
} from 'vuex'
import MD5 from 'md5.js'

export default {
	data() {
		return {
			view_login_mounted: false,
			view_login_tel: '',
			view_login_password: '',
			view_login_toggle_password_show: false,
			view_login_password_type: 'password'
		}
	},
	mounted() {
		this.view_login_mounted = true;
	},
	methods: {
		...mapActions([
			'saveUserInfo'
		]),
		_view_login_toggle_password_show() {
			this.view_login_toggle_password_show = !this.view_login_toggle_password_show;
			this.view_login_password_type = this.view_login_password_type == 'password' ? 'text' : 'password';
		},
		_view_login_confirm_login() {
			if (!/^1\d{10}/.test(this.view_login_tel)) {
				aeorus.showToast('手机号格式有点东西啊~');

				return;
			}

			if (this.view_login_password.length == 0) {
				aeorus.showToast('真就不写密码哦~');

				return;
			}

			aeorus.showLoading('登录中~');

			app.requestPost('/aeoru5/signIn', {
					data: {
						tel: Number(this.view_login_tel),
						password: new MD5().update(this.view_login_tel + this.view_login_password).digest('hex')
					}
				},
				res => {
					aeorus.hideLoading();

					if (res.success) {
						aeorus.showToast({
							icon: 'success',
							content: res.message,
							duration: 3000
						}, () => {
							this.$router.replace({
								path: decodeURIComponent(this.$route.query.redirect || '/')
							});
						});
					} else {
						aeorus.showToast({
							content: res.message,
							duration: 2000
						});
					}
				},
				err => {
					aeorus.hideLoading();
					aeorus.showToast({
						icon: 'netError',
						content: '你的网络大概炸了?',
						duration: 2000
					});
				}
			);
		}
	}
}