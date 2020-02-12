const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = (env, options) => {
    process.env.NODE_ENV = options.mode;
    const scssLoader = process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader;

    return {
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
                { // SASS
                    test: /\.s?css$/,
                    use: [
                        scssLoader,
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
        devServer: {
            contentBase: resolve(__dirname, 'public'),
            hot: true,
            watchOptions: {
                poll: true,
            },
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                title: 'Leitner box',
                template: './src/template.html',
                inject: true,
            }),
        ],
    };
};
