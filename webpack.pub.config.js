// 发布项目时候的配置信息
// 开发时候的配置信息

// 这是最基本的一个配置文件
// 编写配置文件，要有最基本的文件入口和输出文件配置信息等
// 里面还可以加loader和各种插件配置使用
var path = require('path');
var webpack=require("webpack");//在头部引入
// var ExtractTextPlugin = require("extract-text-webpack-plugin");// 提取样式文件的插件
var HtmlWebpackPlugin = require('html-webpack-plugin');// 创建index页面



module.exports = {
    // 项目入口文件
    entry:{
        app:path.resolve(__dirname,'src/index.js'),

    },
    // 编译之后的输出路径
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    plugins:[
        new HtmlWebpackPlugin({
            title: 'Custom template using Handlebars',
            template: './src/index.html',
            htmlWebpackPlugin: {
                // "files": {
                //     "css": [ "main.css" ],
                //     "js": []
                // }
            }
        })
    ]
}
