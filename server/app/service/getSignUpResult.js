'use strict';

const Service = require('egg').Service,
	uuid = require('uuid'),
	MD5 = require('md5.js');

class GetSignUpResultService extends Service {
	async post(params) {
		try {
			let SignUpResult;
			const {
				tel,
				nickname,
				securityCode,
				password
			} = params,
			ip = this.ctx.request.header['x-forwarded-for'],
			selectUserResult = await this.app.mysql.get('users', {
				tel,
				enabled: 1
			});

			if (!selectUserResult || selectUserResult.enabled == 0) {
				const userid = uuid.v1().split('-').join(''),
					salt = uuid.v4().split('-').join(''),
					oriPasswordMD5 = new MD5().update(password).digest('hex'),
					frontOriPasswordMD5 = oriPasswordMD5.substring(0, 16),
					afterOriPasswordMD5 = oriPasswordMD5.substring(16, 32),
					frontSalt = salt.substring(16, 32),
					afterSalt = salt.substring(16, 32),
					saltPassword = new MD5().update(afterOriPasswordMD5 + frontSalt + frontOriPasswordMD5 + afterSalt).digest('hex'),
					insertUserResult = await this.app.mysql.insert('users', {
						userid,
						tel,
						nickname,
						securityCode,
						password: saltPassword,
						ip
					}),
					insertUserSuccess = insertUserResult.affectedRows === 1;

				if (insertUserSuccess) {
					const insertPasswordResult = await this.app.mysql.insert('verification', {
							userid,
							salt
						}),
						insertPasswordSuccess = insertPasswordResult.affectedRows === 1;

					if (insertPasswordSuccess) {
						SignUpResult = {
							message: '注册成功~',
							success: true
						};
					} else {
						SignUpResult = {
							message: '注册失败请重试~',
							success: false
						};
					}
				} else {
					SignUpResult = {
						message: insertUserResult.message,
						success: false
					};
				}
			} else {
				SignUpResult = {
					message: '该手机号已被注册啦~',
					success: false
				}
			}

			return SignUpResult;
		} catch (e) {
			return Object.assign(e, {
				success: false
			});
		}
	}
}

module.exports = GetSignUpResultService;