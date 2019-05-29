'use strict';

module.exports = app => {
	return class AeoRu5Controller extends app.Controller {
		async getAniSvgTxt() {
			const {
				ctx,
				app
			} = this;

			ctx.body = await ctx.service.getAniSvgTxtResult.get();
		}
	}
};