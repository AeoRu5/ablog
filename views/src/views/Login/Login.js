import {
	mapActions
} from 'vuex'
import MD5 from 'md5.js'

export default {
	data() {
		return {
			login_tel: '',
			login_password: '',
			login_toggle_password_show: false,
			login_password_type: 'password'
		}
	},
	methods: {
		...mapActions([
			'saveUserInfo'
		]),
		_login_toggle_password_show() {
			this.login_toggle_password_show = !this.login_toggle_password_show;
			this.login_password_type = this.login_password_type == 'password' ? 'text' : 'password';
		},
		_login_confirm_login() {
			if (!/^1\d{10}/.test(this.login_tel)) {
				this.$showToast('手机号格式有点东西啊~');

				return;
			}

			if (this.login_password.length == 0) {
				this.$showToast('真就不写密码哦~');

				return;
			}

			this.$requestPost('/aeoru5/signIn', {
					data: {
						tel: Number(this.login_tel),
						password: new MD5().update(this.login_tel + this.login_password).digest('hex')
					}
				},
				res => {
					if (res.success) {
						this.$showToast({
							icon: 'success',
							content: res.message,
							duration: 3000
						}, () => {
							this.$router.replace({
								path: decodeURIComponent(this.$route.query.redirect || '/')
							});
						});
					} else {
						this.$showToast({
							content: res.message,
							duration: 2000
						});
					}
				},
				err => {
					this.$showToast({
						icon: 'netError',
						content: '你的网络大概炸了?',
						duration: 2000
					});
				},
				'登录中~'
			);
		}
	}
}