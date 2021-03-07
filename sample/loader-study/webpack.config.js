const path = require('path');
const webpack = require('webpack');

const MyWebpackPlugin = require('./my-webpack-plugin');
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
                    'style-loader',
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
        new webpack.BannerPlugin({
            banner : `Build Date : ${new Date().toLocaleString() }`
        })
        // new MyWebpackPlugin(),
    ]
}