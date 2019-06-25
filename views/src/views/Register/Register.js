import MD5 from 'md5.js'
let getSecurityCodeTimer;

export default {
	data() {
		return {
			register_tel: '',
			register_nickname: '',
			register_securityCode: '',
			register_securityCode_isGetting: false,
			register_securityCodeTxt: '获取验证码',
			register_password: '',
			register_password_format_error_show: false,
			register_password_format_error_message: '',
			register_toggle_password_show: false,
			register_password_type: 'password'
		}
	},
	methods: {
		_register_securityCode_get() {
			if (!/^1\d{10}/.test(this.register_tel)) {
				this.$showToast({
					content: '请填写正确的手机号~',
					duration: 2000
				});

				return;
			}

			if (this.register_nickname == '') {
				this.$showToast('请填写昵称~');

				return;
			}

			if (!this.register_securityCode_isGetting) {
				this.$post('/aeoru5/saveTemporaryInfo', {
					data: {
						tel: Number(this.register_tel),
						nickname: this.register_nickname
					}
				});

				let restSecs = 30;

				this.register_securityCode_isGetting = true;
				this.register_securityCodeTxt = `${restSecs}s后重新获取`;

				getSecurityCodeTimer = setInterval(() => {
					if (restSecs > 0) {
						--restSecs;
						this.register_securityCodeTxt = `${restSecs}s后重新获取`;
					} else {
						this.register_securityCode_isGetting = false;
						this.register_securityCodeTxt = `获取验证码`;

						this.$showModal({
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
		_register_toggle_password_show() {
			this.register_toggle_password_show = !this.register_toggle_password_show;
			this.register_password_type = this.register_password_type == 'password' ? 'text' : 'password';
		},
		_register_confirm_register() {
			if (!/^1\d{10}/.test(this.register_tel)) {
				this.$showToast('请填写正确的手机号~');
			}

			if (this.register_nickname == '') {
				this.$showToast('请填写昵称~');

				return;
			}

			if (!/\d{6}/.test(this.register_securityCode)) {
				this.$showToast('请填写验证码~');

				return;
			}

			if (this.register_password.length < 6) {
				this.$showToast('密码不够长哦~');

				return;
			}

			this.$post('/aeoru5/signUp', {
					data: {
						tel: Number(this.register_tel),
						nickname: this.register_nickname,
						securityCode: Number(this.register_securityCode),
						password: new MD5().update(this.register_tel + this.register_password).digest('hex')
					}
				},
				res => {
					if (res.success) {
						this.$showToast({
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
						this.$showToast({
							icon: 'warn',
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
				'注册中~'
			);
		}
	},
	watch: {
		register_tel(newVal, oldVal) {
			if (newVal.length > 11) {
				this.register_tel = oldVal;
			}
		},
		register_securityCode(newVal, oldVal) {
			if (newVal.length > 6) {
				this.register_securityCode = oldVal;
			}
		},
		register_password(newVal, oldVal) {
			if (newVal.length > 20) {
				this.register_password = oldVal;
			} else {
				let specialCharactersReg = /[`~!！@#$%^&*()_+<>?:"{},.\/;'[\]]/im;

				this.register_password = this.register_password.trim();

				if (specialCharactersReg.test(newVal)) {
					this.register_password_format_error_show = true;
					this.register_password_format_error_message = '密码包含特殊字符';
				} else {
					this.register_password_format_error_show = false;
					this.register_password_format_error_message = '';
				}
			}
		}
	},
	destroyed() {
		clearInterval(getSecurityCodeTimer);
	}
}