const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: "development",
    entry: {
        main: "./src/app.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve("./dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    (process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader')
                    , "css-loader"
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: "url-loader",
                options: {
                    name: "[name].[ext]?[hash]",
                    limit: 10000 // 10Kb
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `Build Date : ${new Date().toLocaleString()}`
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            // title: "test",
            // filename : "tset/test.html" // 파일네임 
            // templateContent: `          // 동적으로 컨텐트 만들기
            // <html> 
            //     <body> 
            //       <h1> Hello World </ h1> 
            //     </ body> 
            //   </ html> 
            // `
            templateParameters: { // 변수 느낌?
                foo: 'bar'
            },
            // inject: true,
            minify: {
                // removeComments: true, //html 주석제거
                removeRedundantAttributes: false // 값이 기본값과 일치하면 속성제거
            }
        }),
        new CleanWebpackPlugin(),
        ...(process.env.NODE_ENV === 'production' ?
            [new MiniCssExtractPlugin({ filename: '[name].css' })]
            : [])
    ],


    /**
     * TODO: 아래 플러그인을 추가해서 번들 결과를 만들어 보세요.
     * 1. BannerPlugin: 결과물에 빌드 시간을 출력하세요.
     * 2. HtmlWebpackPlugin: 동적으로 html 파일을 생성하세요.
     * 3. CleanWebpackPlugin: 빌드 전에 아웃풋 폴더를 깨끗히 정리하세요.
     * 4. MiniCssExtractPlugin: 모듈에서 css 파일을 분리하세요.
     */
};
