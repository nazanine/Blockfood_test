const webpack = require('webpack');
const path = require('path');
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './build');


module.exports = {
    entry:path.join(__dirname, './src/index.js'),
    output: { path: path.join(__dirname, 'dist'), filename: 'bundle.js' },
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: sourcePath,
        compress: true,
        port: 3535,
        historyApiFallback: true
    },
    module:{
        loaders :[
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2'],
                    plugins: [
                        'transform-class-properties',
                        'transform-runtime',
                        'add-module-exports',
                        'transform-runtime',
                        'transform-decorators-legacy',
                    ],

                }
            },
            {
                test: /\.(css|scss)$/,
                loader: 'style-loader'
            }, {
                test: /\.(css|scss)/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[local]___[hash:base64:5]'
                }
            },
            { test: /\.png$/, use: 'url-loader?limit=1250000' },
            { test: /\.(jpg|svg)$/, use: 'url-loader?limit=1250000' },
            { test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: 'url-loader?limit=100000' },
        ]
    }
}
