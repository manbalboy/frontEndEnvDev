const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },{
                test: /\.(png|jpg)$/i,
                loader : 'url-loader',
                options : {
                    publicPath : './dist/',
                    name  : '[name].[ext]?[hash]',
                    // limit : 20000, //20kb
                }
            }
        ]
    }
}
