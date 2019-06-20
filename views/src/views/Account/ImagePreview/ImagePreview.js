import {
	mapState,
	mapActions
} from 'vuex'

export default {
	data() {
		return {
			file: {},
			preview_defaultImage: ''
		}
	},
	created() {
		if (!this.$route.query.avatarInfo.target) {
			this._image_preview_btn_cancel();

			return;
		} else {
			let self = this,
				image = new Image(),
				reader = new FileReader(),
				file = this.$route.query.avatarInfo.target.files[0];

			this.$showLoading();

			reader.readAsDataURL(file);

			reader.onload = function() {
				file.src = this.result;

				image.onload = function() {
					let width = image.width,
						height = image.height;

					file.width = width;
					file.height = height;
					self.preview_defaultImage = file.src;
				};

				image.src = file.src;

				if (file.size / 1024 >= 1024) {
					self.imgCompress(file, {
						quality: 0.2
					});
				} else {
					self.imgCompress(file, {
						quality: 1
					});
				}
			}
		}
	},
	methods: {
		...mapActions([
			'setNavigatorReturn'
		]),
		_image_preview_btn_cancel() {
			this.$router.replace(this.returnUrl[this.returnUrl.length - 1]);
			this.setNavigatorReturn({
				isReturn: true
			});
		},
		_image_preview_btn_confirm() {
			let avatarFormData = new FormData();

			avatarFormData.append(this.userInfo.tel, this.file);

			this.$requestPost('/aeoru5/uploadAvatar', {
					data: avatarFormData
				},
				res => {
					if (res.success) {
						this.$router.replace({
							name: this.returnUrl[this.returnUrl.length - 1],
							query: {
								avater_upload_success: true
							}
						});

						this.setNavigatorReturn({
							isReturn: true
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
		},
		imgCompress(path, obj) {
			let self = this,
				image = new Image();

			image.src = path.src;

			image.onload = function() {
				let canvas = self.$refs.canvas,
					ctx = canvas.getContext('2d'),
					offsetWidth = self.$refs.component_image_preview_frame.offsetWidth,
					offsetHeight = self.$refs.component_image_preview_frame.offsetHeight,
					canvasWidth = document.createAttribute('width'),
					canvasHeight = document.createAttribute('height');

				if (this.width > offsetWidth && this.height < offsetHeight) {
					let w = offsetWidth,
						h = this.height / this.width * offsetWidth;

					this.width = w;
					this.height = h;

					canvasWidth.nodeValue = w;
					canvasHeight.nodeValue = h;
					canvas.setAttributeNode(canvasWidth);
					canvas.setAttributeNode(canvasHeight);
					ctx.drawImage(this, 0, 0, w, h);
				} else if (this.width > offsetWidth && this.height > offsetHeight || this.width < offsetWidth && this.height > offsetHeight) {
					let w = this.width / this.height * offsetHeight,
						h = offsetHeight;

					if (w > offsetWidth) {
						h = offsetHeight / w * offsetWidth;
						w = offsetWidth;
					}

					this.width = w;
					this.height = h;

					canvasWidth.nodeValue = w;
					canvasHeight.nodeValue = h;
					canvas.setAttributeNode(canvasWidth);
					canvas.setAttributeNode(canvasHeight);
					ctx.drawImage(this, 0, 0, w, h);
				} else if (this.width <= offsetWidth && this.height <= offsetHeight) {
					let w = this.width,
						h = this.height;

					canvasWidth.nodeValue = w;
					canvasHeight.nodeValue = h;
					canvas.setAttributeNode(canvasWidth);
					canvas.setAttributeNode(canvasHeight);
					ctx.drawImage(this, 0, 0, w, h);
				}

				let base64 = canvas.toDataURL('image/jpeg', obj.quality),
					urlFile = self.dataURLtoFile(base64, this.width, this.height);

				if (urlFile.size / 1024 >= 1024) {
					self.$showToast('图片过大，请重新上传图片');
				} else {
					self.$hideLoading();
					self.file = urlFile;
				}
			}
		},
		dataURLtoFile(urlData, width, height) {
			let arr = urlData.split(','),
				mime = arr[0].match(/:(.*?);/)[1],
				bstr = atob(arr[1]),
				n = bstr.length,
				u8arr = new Uint8Array(n);

			while (n--) {
				u8arr[n] = bstr.charCodeAt(n);
			}

			return new File([u8arr], `${this.userInfo.tel}.jpeg`, {
				type: mime,
				src: urlData,
				width,
				height
			});
		},
	},
	computed: {
		...mapState({
			userInfo: state => state.userInfo,
			returnUrl: state => state.returnUrl
		})
	}
}