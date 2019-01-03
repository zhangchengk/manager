const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//js压缩插件
const HtmlWebpackPlugin = require('html-webpack-plugin');//html打包插件
const extractTextPlugin=require('extract-text-webpack-plugin');//css分离//npm install   extract-text-webpack-plugin@next
module.exports = {
    entry: "./src/app.tsx",
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
    },
    mode: 'development',
    devtool: "source-map",
    devServer: { 
        hot: true,
        publicPath: '/dist/',
        host:"127.0.0.1",
        port:8080,
        proxy: {
          '/DataStatistic':{
           
            //  target:"http://127.0.0.1:8080",
            target:"http://datastatistic.app.yyuap.com",
           
            changeOrigin: true,
            secure: false
          },
          '/UniteLog':{
           
            // target:"http://127.0.0.1:8080",
            target:"http://logservice.search.app.yyuap.com",
           changeOrigin: true,
           secure: false
         },
        }
     
      },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
          {test:/\.css$/,
              use: extractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
              })},
        { test: /\.png$/, loader: "url-loader"},  
        { test: /\.html$/, loader: "html-loader"}, 
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
          //图片 loader
          {
              test:/\.(png|jpg|gif|jpeg)/,  //是匹配图片文件后缀名称
              use:[{
                  loader:'url-loader', //是指定使用的loader和loader的配置参数
                  options:{
                      limit:500  //是把小于500B的文件打成Base64的格式，写入JS
                  }
              }]
          }
      ]
    },

    plugins: [
        new UglifyJSPlugin,  //js压缩插件
        new HtmlWebpackPlugin({
            minify:{ //是对html文件进行压缩
                removeAttributeQuotes:true  //removeAttrubuteQuotes是却掉属性的双引号。
            },
            hash:true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'index.html' //是要打包的html模版路径和文件名称。

        }),
        new extractTextPlugin("css/index.css")
    ],
  };