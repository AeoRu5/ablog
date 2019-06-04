'use strict';

const Service = require('egg').Service;

class SaveTemporaryInfoResultService extends Service {
	async post(params) {
		try {
			let saveTemporaryInfoResult;
			const {
				tel,
				nickname
			} = params,
			insertTemporaryInfoResult = await this.app.mysql.insert('temporaryInfo', {
				tel,
				nickname,
				ip: this.ctx.request.header['x-forwarded-for']
			}),
			insertTemporaryInfoSuccess = insertTemporaryInfoResult.affectedRows === 1;

			if (insertTemporaryInfoSuccess) {
				saveTemporaryInfoResult = {
					success: true
				}
			} else {
				saveTemporaryInfoResult = {
					success: false
				}
			}
			
			return saveTemporaryInfoResult;
		} catch (e) {
			return Object.assign(e, {
				success: false
			});
		}
	}
}

module.exports = SaveTemporaryInfoResultService;