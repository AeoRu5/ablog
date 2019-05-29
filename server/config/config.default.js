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

	config.keys = appInfo.name + '_8618659651239_1216';

	config.session = {
		key: 'AEORUSTOKEN',
		httpOnly: false,
		encrypt: true,
		signed: false,
		renew: true
	};

	config.security = {
		csrf: {
			enable: false,
			ignoreJSON: true
		},
		domainWhiteList: ['.aeorus.xyz']
	};

	config.cors = {
		allowMethods: 'GET,POST',
	};

	config.mysql = {
		client: {
			db1: {
				host: '127.0.0.1',
				port: '3306',
				user: 'root',
				password: 'aeorusy1',
				database: 'test'
			}
		},
		// 是否加载到 app 上，默认开启
		app: true,
		// 是否加载到 agent 上，默认关闭
		agent: false,
	};

	config.middleware = ['validate', 'notFoundHandler'];

	return config;
};