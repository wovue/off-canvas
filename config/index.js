// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  prod: {
    docs: {
      env: require('./prod.env'),
      index: path.resolve(__dirname, '../docs/index.html'), // html-webpack-plugin output
      assetsRoot: path.resolve(__dirname, '../docs'),
      assetsSubDirectory: 'static',
      assetsPublicPath: '/off-canvas',
      productionSourceMap: true,
      templatePath: path.resolve(__dirname, '../src-docs/index.html'),
      // Gzip off by default as many popular static hosts such as
      // Surge or Netlify already gzip all static assets for you.
      // Before setting to `true`, make sure to:
      // npm install --save-dev compression-webpack-plugin
      productionGzip: false,
      productionGzipExtensions: ['js', 'css']
    },
    dist: {
      env: require('./prod.env'),
      assetsRoot: path.resolve(__dirname, '../dist'),
      assetsPublicPath: '/',
      productionSourceMap: false,
      // Gzip off by default as many popular static hosts such as
      // Surge or Netlify already gzip all static assets for you.
      // Before setting to `true`, make sure to:
      // npm install --save-dev compression-webpack-plugin
      productionGzip: false,
      productionGzipExtensions: ['js', 'css']
    }
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
