var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = { // 导出
  entry: { // 打包的入口文件，一个字符串或者一个对象
    app: './src/main.js'
  },
  output: { // 配置打包的结果，一个对象
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },

  // 如果你想请求一个js文件但是在请求时不带扩展（如：require('somecode')）,那么就需要将'.js'添加到数组中
  resolve: {//影响对模块的解析，一个对象
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: { // 定义对模块的处理逻辑，一个对象
    rules: [
      {
        test: /\.vue$/, // 正则，用于匹配要处理的文件
        loader: 'vue-loader',// 字符串或者数组，处理匹配到的文件。如果只需要用到一个模块加载器则使用loader：string，如果要使用多个模块加载器，则使用loaders：array
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')] // 字符串或者数组，指包含的文件夹
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
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
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
};

