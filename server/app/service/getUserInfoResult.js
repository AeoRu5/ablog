'use strict';

const Service = require('egg').Service,
	MD5 = require('md5.js');

class GetUserInfoResultService extends Service {
	async get() {
		try {
			const getUserSession = this.ctx.session.USERINFO,
				selectUserResult = await this.app.mysql.get('users', {
					userid: getUserSession.userid
				});

			return {
				userInfo: {
					tel: selectUserResult.tel,
					avatar: selectUserResult.avatar,
					nickname: selectUserResult.nickname,
					createDate: selectUserResult.createDate
				},
				success: true
			};
		} catch (e) {
			return Object.assign(e, {
				success: false
			});
		}
	}
}

module.exports = GetUserInfoResultService;