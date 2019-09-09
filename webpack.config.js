const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/app.ts',
    output: {
        path: resolve(__dirname, './public'),
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: true,
            }),
        ],
    },
    module: {
        rules: [
            { // Vue
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            { // TypeScript
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            { // CSS
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            { // SASS
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            { // Others
                test: /\.(eot|woff2?|ttf)$/,
                use: 'file-loader',
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Leitner box',
            template: './src/template.html',
        }),
    ],
};
