const path = require('path');

//webpack plugins
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/index.js', './src/components/main.scss'],
    output: {
        filename: 'index-bundle.js',
        path: path.resolve(__dirname, '../', 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '../', 'src/templates'),
            watch: true,
        },
        compress: true,
        port: 8000,
        liveReload: true
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name]-[hash:6][ext][query]'
                }
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', "sass-loader"]
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
        // new MiniCssExtractPlugin({
        //     filename: 'css/style-[contenthash:6].css'
        // }),
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                filename: "index.html",
                template: "src/templates/template.html",
                title: "moja formatka",
                inject: "body",
            }
        )
    ],
}