const path = require('path')

// const webpack = require('webpack')
const HtmlwebpackPlugin = require('html-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname)

const SRC_PATH = path.resolve(ROOT_PATH, 'src')

const BUILD_PATH = path.resolve(ROOT_PATH, 'dist')

module.exports = {
  mode: 'development', // production, development
  entry: {
    index: path.resolve(SRC_PATH, 'index.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename: 'js/[name].js'
  },
  // devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        include: SRC_PATH,
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: SRC_PATH,
        exclude: path.resolve(ROOT_PATH, 'node_modules')
      }
    ]
  },
  // 配置plugin
  plugins: [
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: path.resolve(SRC_PATH, 'templates', 'index.html'),
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
}
