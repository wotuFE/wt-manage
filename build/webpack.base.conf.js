var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var API = require('../config/API');
var baseUrl = JSON.stringify( API[ process.env.NODE_ENV || "development" ]);
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'client': '@/utils/client.js'
    }
  },
  module: {
    rules: [
      // {
      //   test: require.resolve('../src/store/modules/login'),
      //   loader: "imports-loader?baseUrl=>" + JSON.stringify(API[process.env.NODE_ENV || "development"])
      // },
      {
        test: require.resolve('../src/store/actions'),
        loader: "imports-loader?baseUrl=>"+baseUrl
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: vueLoaderConfig @laohu
        options: {
          loaders: {
            'scss': 'style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
