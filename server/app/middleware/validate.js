module.exports = () => {
	return async function validate(ctx, next) {
		await next();

		try {
			if (ctx.request.method == 'GET') {
				ctx.validate({
					name: {
						type: 'string'
					},
					age: {
						type: 'string'
					},
					gender: {
						type: 'string'
					}
				}, ctx.query);
			} else {
				ctx.validate({
					name: {
						type: 'string'
					},
					age: {
						type: 'number'
					},
					gender: {
						type: 'boolean'
					}
				}, ctx.request.body);
			}
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
	};
};