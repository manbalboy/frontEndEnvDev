const path = require('path');
module.exports = {
    mode : 'development',
    entry :{
        main :'./history/app.js'
    },
    output : {
        path : path.resovle('./dist'),
        filename: '[name].js'
    }
}