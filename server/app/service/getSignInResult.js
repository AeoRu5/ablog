'use strict';

const Service = require('egg').Service,
	MD5 = require('md5.js');

class GetSignInResultService extends Service {
	async post(params) {
		try {
			let SignInResult;
			const {
				tel,
				password
			} = params,
			selectUserResult = await this.app.mysql.get('users', {
				tel,
				enabled: 1
			});

			if (selectUserResult) {
				const selectSaleResult = await this.app.mysql.get('verification', {
					userid: selectUserResult.userid
				}),
				salt = selectSaleResult.salt,
				oriPasswordMD5 = new MD5().update(password).digest('hex'),
				frontOriPasswordMD5 = oriPasswordMD5.substring(0, 16),
				afterOriPasswordMD5 = oriPasswordMD5.substring(16, 32),
				frontSalt = salt.substring(16, 32),
				afterSalt = salt.substring(16, 32),
				saltPassword = new MD5().update(afterOriPasswordMD5 + frontSalt + frontOriPasswordMD5 + afterSalt).digest('hex');
				
				if (selectUserResult.password == saltPassword) {
					const updateUserLoadStatusResult = await this.app.mysql.update('users', {
							loaded: 1
						}, {
							where: {
								userid: selectUserResult.userid
							}
						}),
						updateUserLoadStatusSuccess = updateUserLoadStatusResult.affectedRows === 1;

					if (updateUserLoadStatusSuccess) {
						this.ctx.session.USERSESSION = {
							userid: selectUserResult.userid
						};

						SignInResult = {
							message: '登陆成功了哟~',
							success: true
						}
					} else {
						SignInResult = {
							message: '登陆失败请重试~',
							success: false
						}
					}
				} else {
					SignInResult = {
						message: '密码错误了哎~',
						success: false
					}
				}
			} else {
				SignInResult = {
					message: '该账号不存在哦~',
					success: false
				}
			}

			return SignInResult;
		} catch (e) {
			return Object.assign(e, {
				success: false
			});
		}
	}
}

module.exports = GetSignInResultService;