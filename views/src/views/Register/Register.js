let getSecurityCodeTimer;

export default {
	data() {
		return {
			view_register_tel: '',
			view_register_nickname: '',
			view_register_securityCode: '',
			view_register_securityCode_isGetting: false,
			view_register_securityCodeTxt: '获取验证码',
			view_register_password: '',
			view_register_password_format_error_show: false,
			view_register_password_format_error_message: '',
			view_register_toggle_password_show: false,
			view_register_password_type: 'password'
		}
	},
	methods: {
		_view_register_securityCode_get() {
			if (!/\d{11}/.test(this.view_register_tel)) {
				this.aeorusUI.showToast({
					content: '请填写正确的手机号~',
					mask: true,
					duration: 2000
				});

				return;
			}

			if (this.view_register_nickname == '') {
				this.aeorusUI.showToast({
					content: '请填写昵称~',
					mask: true
				});

				return;
			}

			if (!this.view_register_securityCode_isGetting) {
				this.utils.requestPost('/aeoru5/saveTemporaryInfo', {
						data: {
							tel: this.view_register_tel,
							nickname: this.view_register_nickname
						}
					}
				);

				let restSecs = 30;

				getSecurityCodeTimer = setInterval(() => {
					if (restSecs >= 0) {
						this.view_register_securityCode_isGetting = true;
						this.view_register_securityCodeTxt = `${restSecs}s后重新获取`;
						--restSecs;
					} else {
						this.view_register_securityCode_isGetting = false;
						this.view_register_securityCodeTxt = `获取验证码`;

						this.aeorusUI.showModal({
							title: '经费不足',
							content: '哪有钱做短信验证啊，随便写个六位数得了~',
							showCancel: false
						});

						clearInterval(getSecurityCodeTimer);
					}
				}, 1000);
			} else {
				return;
			}
		},
		_view_register_toggle_password_show() {
			this.view_register_toggle_password_show = !this.view_register_toggle_password_show;
			this.view_register_password_type = this.view_register_password_type == 'password' ? 'text' : 'password';
		},
		_view_register_confirm_register() {
			if (!/\d{11}/.test(this.view_register_tel)) {
				this.aeorusUI.showToast({
					content: '请填写正确的手机号~',
					mask: true
				});
			}

			if (this.view_register_nickname == '') {
				this.aeorusUI.showToast({
					content: '请填写昵称~',
					mask: true
				});

				return;
			}

			if (!/\d{6}/.test(this.view_register_securityCode)) {
				this.aeorusUI.showToast({
					content: '请填写验证码~',
					mask: true
				});

				return;
			}

			if (this.view_register_password.length < 6) {
				this.aeorusUI.showToast({
					content: '密码不够长哦~',
					mask: true
				});

				return;
			}

			this.aeorusUI.showLoading('注册中~');

			this.utils.requestPost('/aeoru5/signUp', {
					data: {
						tel: this.view_register_tel,
						nickname: this.view_register_nickname,
						securityCode: this.view_register_securityCode,
						password: this.view_register_password
					}
				},
				res => {
					this.aeorusUI.hideLoading();

					if (res.success) {
						this.aeorusUI.showToast({
							content: res.message,
							mask: true
						}, () => {
							this.$router.push({
								name: 'login',
								query: {
									redirect: this.$route.query.redirect
								}
							});
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
				}
			);
		}
	},
	watch: {
		view_register_tel(newVal, oldVal) {
			if (newVal.length > 11) {
				this.view_register_tel = oldVal;
			}
		},
		view_register_securityCode(newVal, oldVal) {
			if (newVal.length > 6) {
				this.view_register_securityCode = oldVal;
			}
		},
		view_register_password(newVal, oldVal) {
			if (newVal.length > 20) {
				this.view_register_password = oldVal;
			} else {
				let specialCharactersReg = /[`~!！@#$%^&*()_+<>?:"{},.\/;'[\]]/im;

				this.view_register_password = this.view_register_password.trim();

				if (specialCharactersReg.test(newVal)) {
					this.view_register_password_format_error_show = true;
					this.view_register_password_format_error_message = '密码包含特殊字符';
				} else {
					this.view_register_password_format_error_show = false;
					this.view_register_password_format_error_message = '';
				}
			}
		}
	},
	destroyed() {
		clearInterval(getSecurityCodeTimer);
	}
}