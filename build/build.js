/* eslint-env shelljs */

// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var prodConfig = require('../config').prod
var ora = require('ora')
var webpack = require('webpack')
var webpackDocsConfig = require('./webpack.prod.docs.conf')
var webpackDistConfig = require('./webpack.prod.dist.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var docsFolderPath = prodConfig.docs.assetsRoot
rm('-rf', docsFolderPath)
mkdir('-p', docsFolderPath)
cp('-R', 'static/', docsFolderPath)

var distFolderPath = prodConfig.dist.assetsRoot
rm('-rf', distFolderPath)
mkdir('-p', distFolderPath)

webpack(webpackDocsConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})

webpack(webpackDistConfig, function (err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
