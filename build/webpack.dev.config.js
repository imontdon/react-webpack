const path = require('path')

const HtmlwebpackPlugin = require('html-webpack-plugin')

const merge = require('webpack-merge')

const { baseConfig, ROOT_PATH } = require('./webpack.base.config.js')

baseConfig.mode = 'development'

const devConfig = merge(baseConfig, {
  plugins: [
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: path.resolve(ROOT_PATH, 'index.html')
    })
  ]
})

module.exports = devConfig
