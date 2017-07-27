var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //页面入口文件配置
    entry: {
        'index': './page/index.js'
    },
    //入口文件输出配置
    output: {
        path: './page/public/',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        },
        {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        },{
            test: /\.vue$/,
            loader: 'vue'
        },{
            test:/\.(png)|(jpg)$/,
            loader: "url",
            query: {
                limit: 1024,
                name: './img/[name].[ext]'
            }
        }
        ]
    },
    babel: {
        presets: ['es2015']
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new BrowserSyncPlugin({
            //open: 'external',
            //host: 'enterprise.haogong365.com',
            host: 'localhost',
            port: 3000,
            files: '',
            server: {
                //指定服务器启动根目录
                //baseDir: './page/'
                baseDir: './'
            }
        }),
        new HtmlWebpackPlugin({
            template: './page/index_tpl.html',
            filename: '../index.html',
            hash: true,
            inject: true
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
    ],
     resolve: {
        // require时省略的扩展名，如：require('app') 不需要app.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};