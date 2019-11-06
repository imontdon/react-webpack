const path = require('path')

const webpack = require('webpack')

const HtmlwebpackPlugin = require('html-webpack-plugin')

const merge = require('webpack-merge')

const { baseConfig, SRC_PATH } = require('./webpack.base.config.js')

baseConfig.mode = 'production'

const devConfig = merge(baseConfig, {
  // devtool: 'eval-source-map',
  plugins: [
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: path.resolve(SRC_PATH, '../index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeAttributeQuotes: true
      }
    })
  ]
})

module.exports = devConfig
