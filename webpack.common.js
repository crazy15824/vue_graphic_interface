console.log("[+] webpack.common.js")

const path = require("path");
const webpack = require('webpack');

const { VueLoaderPlugin } = require("vue-loader");

const Dotenv = require('dotenv-webpack');

const entryPoint = path.resolve(__dirname, './src/main.ts')

const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = ({
    entry: entryPoint,
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    resolve: {
        modules: [
            path.join(__dirname, './node_modules')
        ],
        fallback: {
          "buffer": require.resolve("buffer/"),
        },
        alias: {
          vue: "@vue/runtime-dom",
          assetsFolder: path.resolve(__dirname, 'src/assets/'),
          srcFolder: path.resolve(__dirname, 'src/'),
          "@": path.resolve(__dirname, 'src/'),
        },
        extensions: ['.tsx', '.ts', '.js','.css', 'json'],
    },
  module: {
    rules: [      
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env'] }
            }
        },
        { 
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: { appendTsSuffixTo: [/\.vue$/] } 
      }, 
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [
            "style-loader", "css-loader"
        ]
      },
      {
        test: /\.(woff|eot|woff2|ttf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          esModule: false,
          name: "[name].[ext]"
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[id].[hash].[ext]'
        },
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
        "__VUE_OPTIONS_API__": true,
        "__VUE_PROD_DEVTOOLS__": true,
    }),
    new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
  }),
    new GenerateSW({
        swDest: 'service-worker.js',
    }),
  ],
});