const path = require('path');
module.exports = {
    mode : 'development',
    entry :{
        main :'./history/app.js'
    },
    output : {
        path : path.resolve('./history/dist'),
        filename: '[name].js'
    }
}