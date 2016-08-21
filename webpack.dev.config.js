const path=require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports={
 entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    },
     plugins:[
        new OpenBrowserPlugin({ url:'http://localhost:8080/' })
    ]

}
