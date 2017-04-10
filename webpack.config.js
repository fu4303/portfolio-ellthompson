const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, './app'),
    entry: {
        app: './index.jsx',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        modules: [
            path.join(__dirname, './app'),
            "node_modules"
        ],
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, './app'),
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react'] }
                }],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                loader: 'file-loader',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({
            title: 'Elliott Thompson',
            favicon: 'favicon.jpg'
        })
    ]
};
