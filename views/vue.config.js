const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	devServer: {
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
		extract: false,
		sourceMap: false,
		loaderOptions: {
			less: {
				modifyVars: {},
				javascriptEnabled: true
			}
		}
	}
};