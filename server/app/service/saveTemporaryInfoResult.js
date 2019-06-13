'use strict';

const Service = require('egg').Service,
	ak = 'Bmss8DCGOPjfL2cPNm8mNkYmnWNsP1e1';

class SaveTemporaryInfoResultService extends Service {
	async post(params) {
		try {
			let saveTemporaryInfoResult;
			const {
				tel,
				nickname
			} = params,
			ip = '58.23.237.225' || this.ctx.request.header['x-forwarded-for'],
				getPositionResult = await this.ctx.curl(`https://api.map.baidu.com/location/ip?ip=${ip}&ak=${ak}&coor=bd09ll`, {
					method: 'GET',
					contentType: 'json',
					dataType: 'json'
				}),
				insertTemporaryInfoResult = await this.app.mysql.insert('temporaryInfo', {
					tel,
					nickname,
					ip,
					position: getPositionResult.data.content.address
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