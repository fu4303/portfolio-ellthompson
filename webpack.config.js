const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, './app'),
    entry: {
        app: './index.jsx',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react'] }
                }],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Foo'
        })
    ]
};
