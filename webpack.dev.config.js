const webpack = require('webpack');
const config = require('./webpack.common.start.config');
config.devServer = {
  hot: true,
  publicPath: '/dist/',
  host:"127.0.0.1",
  port:3000,
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
}
config.plugins.push(new webpack.HotModuleReplacementPlugin());
module.exports = config;