console.log("[+] webpack.dev.js")

const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

 module.exports = merge(common, {
   devtool: "eval-cheap-source-map",
   mode: 'development',
   devServer: {
    hot: true,
    static: path.resolve(__dirname, 'public'),
    public: 'localhost:8080',
    transportMode: 'ws',
    port: 8080,
    proxy: {
      '^/': 'http://localhost:8080'
   },
  }
 });