var path = require('path')
var prodConfig = require('../config').prod
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : prodConfig.dist.env

var webpackConfig = merge(baseWebpackConfig, {
  entry: {
    'off-canvas': './src/main.js'
  },
  module: {
    loaders: utils.styleLoaders({ sourceMap: prodConfig.dist.productionSourceMap, extract: true })
  },
  devtool: prodConfig.dist.productionSourceMap ? '#source-map' : false,
  output: {
    path: prodConfig.dist.assetsRoot,
    publicPath: prodConfig.dist.assetsPublicPath,
    filename: utils.assetsPath('[name].js', true),
    chunkFilename: utils.assetsPath('[id].js', true),
    // build for AMD, CommonJS2 and UMD
    libraryTarget: 'umd'
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: prodConfig.dist.productionSourceMap,
      extract: true
    })
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // extract css into its own file
    new ExtractTextPlugin(utils.assetsPath('[name].css', true))
  ]
})

if (prodConfig.dist.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        prodConfig.dist.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = webpackConfig
