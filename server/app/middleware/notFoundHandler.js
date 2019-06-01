module.exports = () => {
	return async function notFoundHandler(ctx, next) {
		await next();
		
		if (ctx.status === 404 && !ctx.body) {
			if (ctx.acceptJSON) {
				ctx.body = {
					message: 'API Not Found',
					success: false
				};
			} else {
				ctx.body = '<h1>API Not Found</h1>';
			}
		}
	};
};