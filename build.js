const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config')

webpackBaseConfig.plugins = []

module.exports = merge(webpackBaseConfig, {
	output: {
		publicPath: '/distdoc/',
		filename: '[name].js'
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({  //配置用于压缩
			compress: {
				warnings: false
			}
		}),
		new HtmlWebpackPlugin({
			filename: '../index_pro.html',
            template: './index.html',
            inject: false
		})
	]

})