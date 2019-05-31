export default {
	data() {
		return {
			view_login_tel: '',
			view_login_password: '',
			view_login_toggle_password_show: false,
			view_login_password_type: 'password'
		}
	},
	methods: {
		_view_login_toggle_password_show() {
			this.view_login_toggle_password_show = !this.view_login_toggle_password_show;
			this.view_login_password_type = this.view_login_password_type == 'password' ? 'text' : 'password';
		},
		_view_login_confirm_login() {
			this.aeorusUI.showLoading('登录中~');

			this.utils.requestPost('/aeoru5/signIn', {
				data: {
					tel: this.view_login_tel,
					password: this.view_login_password
				}
			},
			res => {
				this.aeorusUI.hideLoading();

				if (res.success) {
					this.aeorusUI.showToast({
						content: res.message,
						mask: true,
						duration: 3000
					});
				} else {
					this.aeorusUI.showToast({
						content: res.message,
						duration: 2000
					});
				}
			},
			err => {
				this.aeorusUI.showToast({
					content: '你的网络大概炸了?',
					duration: 2000
				});
			});
		}
	}
}