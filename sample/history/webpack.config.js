const path = require('path');
module.exports = {
    mode : 'development',
    entry :{
        // main :'./history/app.js' 엔트리와 아웃풋 실험 , 웹팩로더 실험
        main :'./app.js'
    },
    output : {
        path : path.resolve('./dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test :  /\.js$/,
                use : [
                    path.resolve('./my-webpack-loader.js')
                ]
            }
        ]
    }
}