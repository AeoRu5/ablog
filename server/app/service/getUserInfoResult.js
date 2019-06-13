'use strict';

const Service = require('egg').Service,
	MD5 = require('md5.js');

class GetUserInfoResultService extends Service {
	async get() {
		try {
			let UserInfoResult;

			const getUserSession = this.ctx.session.USERINFO,
				selectUserResult = await this.app.mysql.get('users', {
					userid: getUserSession.userid
				});

			UserInfoResult = {
				userInfo: {
					tel: selectUserResult.tel,
					nickname: selectUserResult.nickname,
					createDate: selectUserResult.createDate
				},
				success: true
			}

			return UserInfoResult;
		} catch (e) {
			return Object.assign(e, {
				success: false
			});
		}
	}
}

module.exports = GetUserInfoResultService;