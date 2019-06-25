module.exports = () => {
	return async function checkLoadStatus(ctx, next) {
		await next();

		let noRight = /^signIn$|^signUp$|^saveTemporaryInfo$/.test(ctx.request.url);
		
		if (!noRight) {
			if (!ctx.session.USERSESSION) {
				ctx.body = {
					needLoad: true,
					message: '用户未登录',
					success: false
				}
			}
		}
	};
};