'use strict';

const Service = require('egg').Service;

class GetAniSvgTxtResultService extends Service {
  async get(account, password) {
    try {
      const aniSvgTxtResult = {
        aniSvgTxt: '新の助',
        success: true
      };

      return aniSvgTxtResult;
    } catch (e) {
      return Object.assign(e, {
        success: false
      });
    }
  }
}

module.exports = GetAniSvgTxtResultService;