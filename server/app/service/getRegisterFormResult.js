'use strict';

const Service = require('egg').Service;

class GetRegisterFormResultService extends Service {
  async post(params) {
    try {
      let RegisterFormResult;
      const {
        tel,
        securityCode,
        password
      } = params,
      selectUserResult = await this.app.mysql.get('users', {
        tel,
        enabled: 1
      });

      if (!selectUserResult || selectUserResult.enabled == 0) {
        const insertUserResult = await this.app.mysql.insert('users', {
            tel,
            password
          }),
          insertUserSuccess = insertUserResult.affectedRows === 1;

        if (insertUserSuccess) {
          RegisterFormResult = {
            message: '注册成功',
            success: true
          };
        } else {
          RegisterFormResult = {
            message: insertUserResult.message,
            success: false
          };
        }
      } else {
        RegisterFormResult = {
          message: '该手机号已被注册啦~',
          success: false
        }
      }

      return RegisterFormResult;
    } catch (e) {
      return Object.assign(e, {
        success: false
      });
    }
  }
}

module.exports = GetRegisterFormResultService;