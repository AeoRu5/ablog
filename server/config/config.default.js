'use strict';

module.exports = appInfo => {
	const config = exports = {
		onerror: {
			all(err, ctx) {
				ctx.body = err;
				ctx.status = 500;
			}
		}
	};

	config.proxy = true;
	config.maxProxyCount = 1;
	config.hostHeaders = 'X-Forwarded-For';

	config.keys = appInfo.name + '_8618659651239_1216';

	config.session = {
		renew: true,
		encrypt: true,
		signed: true,
		key: 'USERINFO',
		httpOnly: false,
		maxAge: 3600 * 1000
	};

	config.security = {
		csrf: {
			enable: false,
			ignoreJSON: true
		},
		domainWhiteList: ['.aeorus.xyz']
	};

	config.cors = {
		allowMethods: 'GET,POST'
	};

	config.mysql = {
		client: {
			host: 'aeorus.xyz',
			port: '3306',
			user: 'root',
			password: 'aeorusy1',
			database: 'aeorus'
		},
		// 是否加载到 app 上，默认开启
		app: true,
		// 是否加载到 agent 上，默认关闭
		agent: false,
	};

	config.middleware = ['notFoundHandler', 'checkLoadStatus'];

	return config;
};