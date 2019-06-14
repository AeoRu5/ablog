import MD5 from 'md5.js'
let getSecurityCodeTimer;

export default {
	data() {
		return {
			view_register_mounted: false,
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
	mounted() {
		this.view_register_mounted = true;
	},
	methods: {
		_view_register_securityCode_get() {
			if (!/^1\d{10}/.test(this.view_register_tel)) {
				aeorus.showToast({
					content: '请填写正确的手机号~',
					duration: 2000
				});

				return;
			}

			if (this.view_register_nickname == '') {
				aeorus.showToast('请填写昵称~');

				return;
			}

			if (!this.view_register_securityCode_isGetting) {
				app.requestPost('/aeoru5/saveTemporaryInfo', {
					data: {
						tel: Number(this.view_register_tel),
						nickname: this.view_register_nickname
					}
				});

				let restSecs = 30;

				this.view_register_securityCode_isGetting = true;
				this.view_register_securityCodeTxt = `${restSecs}s后重新获取`;

				getSecurityCodeTimer = setInterval(() => {
					if (restSecs >= 0) {
						--restSecs;
						this.view_register_securityCodeTxt = `${restSecs}s后重新获取`;
					} else {
						this.view_register_securityCode_isGetting = false;
						this.view_register_securityCodeTxt = `获取验证码`;

						aeorus.showModal({
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
			if (!/^1\d{10}/.test(this.view_register_tel)) {
				aeorus.showToast('请填写正确的手机号~');
			}

			if (this.view_register_nickname == '') {
				aeorus.showToast('请填写昵称~');

				return;
			}

			if (!/\d{6}/.test(this.view_register_securityCode)) {
				aeorus.showToast('请填写验证码~');

				return;
			}

			if (this.view_register_password.length < 6) {
				aeorus.showToast('密码不够长哦~');

				return;
			}

			aeorus.showLoading('注册中~');

			app.requestPost('/aeoru5/signUp', {
					data: {
						tel: Number(this.view_register_tel),
						nickname: this.view_register_nickname,
						securityCode: Number(this.view_register_securityCode),
						password: new MD5().update(this.view_register_tel + this.view_register_password).digest('hex')
					}
				},
				res => {
					aeorus.hideLoading();

					if (res.success) {
						aeorus.showToast({
							icon: 'success',
							content: res.message
						}, () => {
							this.$router.replace({
								name: 'login',
								query: {
									redirect: this.$route.query.redirect
								}
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