'use strict';

const Service = require('egg').Service,
  ak = 'Bmss8DCGOPjfL2cPNm8mNkYmnWNsP1e1';

class GetAniSvgTextResultService extends Service {
  async post() {
    try {
      const ip = '58.23.237.225' || this.ctx.request.header['x-forwarded-for'],
        getPositionResult = await this.ctx.curl(`https://api.map.baidu.com/location/ip?ip=${ip}&ak=${ak}&coor=bd09ll`, {
          method: 'GET',
          contentType: 'json',
          dataType: 'json'
        }),
        insertVisitorsInfoResult = await this.app.mysql.insert('visitors', {
          ip,
          position: getPositionResult.data.content.address
        }),
        aniSvgTextResult = {
          aniSvgText: '新の助',
          success: true
        };

      return aniSvgTextResult;
    } catch (e) {
      return Object.assign(e, {
        success: false
      });
    }
  }
}

module.exports = GetAniSvgTextResultService;