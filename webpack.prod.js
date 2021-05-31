console.log("[+] webpack.prod.js")

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new PurgecssPlugin({
            paths: glob.sync([
                path.join(__dirname, './src/**/*.css'),
                path.join(__dirname, './src/**/*.vue'),
                path.join(__dirname, './src/**/*.js'),
            ]),
            whitelist: ['html', 'body'],
        }),
       
    ]
});
