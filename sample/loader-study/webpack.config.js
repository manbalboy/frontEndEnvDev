const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MyWebpackPlugin = require('./my-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode : 'development',
    entry :{
        main :'./src/app.js'
    },
    output : {
        path : path.resolve('./dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test :  /\.css$/,
                use : [
                    process.env.NOD_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader'
                ]
            },
            /*{
                test :  /\.(png|jpg)$/,
                loader : 'file-loader',
                options : {
                    publicPath : './dist/',
                    name  : '[name].[ext]?[hash]'
                } 
                // use : [
                //     'file-loader'
                // ]
            }*/

            {
                test :  /\.(png|jpg)$/,
                loader : 'url-loader',
                options : {
                    publicPath : './dist/',
                    name  : '[name].[ext]?[hash]',
                    // limit : 20000, //20kb
                } 
            }
        ]
    },
    plugins : [
        new webpack.BannerPlugin({ //파일에 주석
            banner : `Build Date : ${new Date().toLocaleString() }`
        }),
        new webpack.DefinePlugin({ //환경변수 선언
            TWO : JSON.stringify('1+1'),
        }),
        new HtmlWebpackPlugin({ //html 관리 
            template : './src/index.html',
            templateParameters : {
                // env : process.env.NOD_ENV === 'development' ? '(개발용)' : ''
                envTest :  '(개발용)' 
            },
            minify :{ 
                collapseWhitespace : true, // 빈칸제거
                removeComments : true // 주석제거
            }
        }),
        new CleanWebpackPlugin(), //output 삭제 
        ...(process.env.NOD_ENV === 'production' ?
            [new MiniCssExtractPlugin({filename : '[name].css'})]
            : [])

        // new MyWebpackPlugin(),
    ]
}