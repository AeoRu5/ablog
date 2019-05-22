const path = require('path')

module.exports = {
	devServer: {
		port: 8080,
		host: 'localhost',
		https: false,
		open: false,
		proxy: {
			'/aeoru5': {
				target: 'http://127.0.0.1:7001/',
				ws: false,
				https: false,
				open: true,
				changeOrigin: true
			},
		}
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: []
		}
	},
	css: {
		sourceMap: false,
		loaderOptions: {
			less: {
				modifyVars: {
					'background-color': '#cccccc'
				},
				javascriptEnabled: true
			}
		}
	}
};