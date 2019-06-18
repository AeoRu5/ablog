'use strict';

const Service = require('egg').Service,
	fs = require('fs'),
	path = require('path'),
	sendToWormhole = require('stream-wormhole'),
	awaitWriteStream = require('await-stream-ready').write;

class GetUploadAvatarResultService extends Service {
	async post() {
		const stream = await this.ctx.getFileStream(),
			filename = Math.random().toString(36).substr(2) + new Date().getTime() + path.extname(stream.filename).toLocaleLowerCase(),
			target = path.join(this.config.baseDir, 'app/public/avatar', filename),
			writeStream = fs.createWriteStream(target);

		try {
			await awaitWriteStream(stream.pipe(writeStream));

			let UploadAvatarResult;
			const selectUserResult = await this.app.mysql.get('users', {
				tel: stream.fieldname,
				enabled: 1
			});

			if (selectUserResult.avatar) {
				fs.unlinkSync(path.join(this.config.baseDir, 'app/public/avatar', selectUserResult.avatar));
			}

			const updateUserAvatarResult = await this.app.mysql.update('users', {
					avatar: filename
				}, {
					where: {
						tel: selectUserResult.tel,
						enabled: 1
					}
				}),
				updateUserAvatarSuccess = updateUserAvatarResult.affectedRows === 1;

			if (updateUserAvatarSuccess) {
				UploadAvatarResult = {
					message: '上传成功~',
					success: true
				};
			} else {
				UploadAvatarResult = {
					message: '上传失败请重试~',
					success: false
				};
			}

			return UploadAvatarResult;
		} catch (e) {
			await sendToWormhole(stream);

			return Object.assign(e, {
				success: false
			});
		}
	}
}

module.exports = GetUploadAvatarResultService;