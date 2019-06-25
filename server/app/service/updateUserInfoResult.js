'use strict';

const Service = require('egg').Service;

class UpdateUserInfoResultService extends Service {
	async post(params) {
		try {
			let UpdateUserInfoResult;
			const getUserSession = this.ctx.session.USERSESSION,
				updateUserInfoResult = await this.app.mysql.update('users', {
					nickname: params.nickname
				}, {
					where: {
						userid: getUserSession.userid
					}
				}),
				updateUserInfoSuccess = updateUserInfoResult.affectedRows === 1;

			if (updateUserInfoSuccess) {
				UpdateUserInfoResult = {
					message: '更新成功~',
					success: true
				};
			} else {
				UpdateUserInfoResult = {
					message: '更新失败请重试~',
					success: false
				};
			}

			return UpdateUserInfoResult;
		} catch (e) {
			return Object.assign(e, {
				success: false
			});
		}
	}
}

module.exports = UpdateUserInfoResultService;