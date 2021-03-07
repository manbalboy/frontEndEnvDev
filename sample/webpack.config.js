const path = require('path');
module.exports = {
    mode : 'development',
    entry :{
        main :'./history/app.js'
    },
    output : {
        path : path.resolve('./history/dist'),
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