'use strict';

module.exports = app => {
	return class AeoRu5Controller extends app.Controller {
		async getAniSvgTxt() {
			const {
				ctx,
				app
			} = this;

			this.getUserToken(ctx)

			ctx.body = await ctx.service.getAniSvgTxtResult.get();
		}
		getUserToken(ctx) {
			let aeorustoken = ctx.request.header.aeorustoken;

			if (aeorustoken == '') {
				return ctx.set('aeorustoken', '3V3SjJrRWQwMTV6aVI1OEVCd0JSMW5NYnFYOG1KN1lYQUlidGg3WGJtaWtERWhjQVFBQUFBJCQAAAAAAAAAAAEAAABKc5c7uPSx2rzS0KHS3da9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKR~IFykfyBcU');
			}
		}
	}
};