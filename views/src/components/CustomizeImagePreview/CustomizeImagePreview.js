import {
	mapState
} from 'vuex'

export default {
	props: ['avater_preview_info'],
	data() {
		return {
			preview_defaultImage: ''
		}
	},
	created() {
		let self = this,
			reader = new FileReader();

		reader.readAsDataURL(this.avater_preview_info.target.files[0]);

		reader.onload = function() {
			self.preview_defaultImage = this.result
		}
	},
	methods: {
		_image_preview_btn_cancel() {
			this.$emit('_userInfo_avatar_preview', {
				isSelected: false
			});
		},
		_image_preview_btn_confirm() {
			let avatarFormData = new FormData();

			avatarFormData.append(this.userInfo.tel, this.avater_preview_info.target.files[0]);

			this.$requestPost('/aeoru5/uploadAvatar', {
					data: avatarFormData
				},
				res => {
					if (res.success) {
						this.$emit('_userInfo_avatar_preview', {
							isSelected: false,
							isSuccessUpload: true
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
				'上传中...'
			);
		}
	},
	computed: {
		...mapState({
			userInfo: state => state.userInfo
		})
	}
}