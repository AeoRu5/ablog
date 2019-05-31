'use strict';

module.exports = app => {
	return class AeoRu5Controller extends app.Controller {
		async getAniSvgTxt() {
			const {
				ctx,
				app
			} = this;

			ctx.body = await ctx.service.getAniSvgTxtResult.post();
		}
		async signUp() {
			const {
				ctx,
				app
			} = this;

			try {
				ctx.validate({
					tel: {
						type: 'string',
						require: true
					},
					securityCode: {
						type: 'number',
						require: true
					},
					password: {
						type: 'string',
						require: true
					},
				}, ctx.request.body);
			} catch (e) {
				ctx.logger.warn(e);

				let errors = e.errors,
					message = '';

				errors.map((error, index) => {
					message += index > 0 ? ` and '${error.field}' ${error.message}` : `'${error.field}' ${error.message}`;
				});

				ctx.body = {
					message,
					success: false
				};

				return;
			}

			ctx.body = await ctx.service.getSignUpResult.post(ctx.request.body);
		}
		async signIn() {
			const {
				ctx,
				app
			} = this;

			try {
				ctx.validate({
					tel: {
						type: 'string',
						require: true
					},
					password: {
						type: 'string',
						require: true
					},
				}, ctx.request.body);
			} catch (e) {
				ctx.logger.warn(e);

				let errors = e.errors,
					message = '';

				errors.map((error, index) => {
					message += index > 0 ? ` and '${error.field}' ${error.message}` : `'${error.field}' ${error.message}`;
				});

				ctx.body = {
					message,
					success: false
				};

				return;
			}

			ctx.body = await ctx.service.getSignInResult.post(ctx.request.body);
		}
	}
};