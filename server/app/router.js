'use strict';

const RouteAeoRu5 = require('./router/aeoru5');

module.exports = app => {
	const {
		router,
		controller
	} = app;

	RouteAeoRu5(app);
};