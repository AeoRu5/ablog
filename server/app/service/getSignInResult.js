'use strict';

const Service = require('egg').Service;

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

      if (selectUserResult && selectUserResult.enabled == 1) {
        if (selectUserResult.password == password) {
          SignInResult = {
            message: '登陆成功~',
            success: true
          }
        } else {
          SignInResult = {
            message: '密码错误~',
            success: false
          }
        }
      } else {
        SignInResult = {
          message: '未注册该账号~',
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