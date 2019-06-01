'use strict';

const Service = require('egg').Service;

class GetAniSvgTxtResultService extends Service {
  async post() {
    try {
      const getVisitorsCounts = await this.app.mysql.get('visitors', {
          id: 0
        }),
        visitorsCounts = getVisitorsCounts.visitorsCounts + 1,
        updateVisitorsCountsRow = {
          id: 0,
          visitorsCounts
        },
        updateVisitorsCountsResult = await this.app.mysql.update('visitors', updateVisitorsCountsRow),
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