export default {
	data() {
		return {
			view_register_tel: '',
			view_register_securityCode: '',
			view_register_password: '',
			view_register_password_format_error_show: false,
			view_register_password_format_error_message: '',
			view_register_toggle_password_show: false,
			view_register_password_type: 'password'
		}
	},
	created() {
		this.aeorusUI.showToast({
			content: '我需要showToast，所以我觉得需要换行',
			mask: true,
			duration: 3000
		});
	},
	methods: {
		_view_register_confirm_register() {
			let self = this;
			this.aeorusUI.showModal({
				title: '提示',
				content: '注册成功',
				showCancel: true,
				confirm() {
					console.log('confirm');
				},
				cancel() {
					// self.aeorusUI.showToast({
					// 	content: '我需要showToast，所以我觉得需要换行',
					// 	mask: true,
					// 	duration: 60000
					// });
				},
				completed() {
					console.log('completed')
				}
			});
		},
		_view_register_toggle_password_show() {
			this.view_register_toggle_password_show = !this.view_register_toggle_password_show;
			this.view_register_password_type = this.view_register_password_type == 'password' ? 'text' : 'password';
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
	}
}