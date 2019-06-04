'use strict';

const Service = require('egg').Service;

class GetAniSvgTxtResultService extends Service {
  async post() {
    try {
      const insertVisitorsInfoResult = await this.app.mysql.insert('visitors', {
          ip: this.ctx.request.header['x-forwarded-for']
        }),
        aniSvgTxtResult = {
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