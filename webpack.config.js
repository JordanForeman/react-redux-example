const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    devtool: 'source-map',
    mode: 'development',
    output: {
        path: __dirname,
        filename: './lib/main.js'
    },
    module: {
        rules: [
            {test: /\.js$/, use: ['babel-loader'], enforce: 'pre', exclude: /node_modules/}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'lib'),
        compress: true,
        hot: true,
        historyApiFallback: true,
        port: 5555
    }
};
