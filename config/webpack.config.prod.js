const path = require('path');

//webpack plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'test-[contenthash:6].js',
        path: path.resolve(__dirname, '../', 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[hash:6][ext][query]'
                }
            },
            {
                test: /\.(scss|sass)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style-[contenthash:6].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/templates/template.html",
            title: "nowa aplikacja"
        })
    ],
}