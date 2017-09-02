const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, './distdoc'),
        publicPath: '/distdoc/',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                	publicPath: './',
                    use: 'css-loader?minimize',
                    fallback: 'style-loader'
                })
            },
            {
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader:'url-loader?limit=1024&name=distdoc/[hash].[ext]'
			}
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css')
    ]
};

module.exports = config;