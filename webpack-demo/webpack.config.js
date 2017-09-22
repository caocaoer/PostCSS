var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractStyle = new ExtractTextPlugin('style.css');

module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
                include: __dirname + '/src',
                query: {
                    presets: ['latest']
                }
            }, {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: extractStyle.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader']
                })
            }
        ]
    },
    plugins: [
        extractStyle,
        new htmlWebpackPlugin({
            filename: 'index.html', 
            template: 'index.html', 
            inject: 'body'})
    ]
}