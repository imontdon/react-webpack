const path = require('path')

const webpack = require('webpack')

const ROOT_PATH = path.resolve(__dirname, '../')

const SRC_PATH = path.resolve(ROOT_PATH, './src')

const BUILD_PATH = path.resolve(ROOT_PATH, './dist')

// console.log(path.join(ROOT_PATH, '/build/lib'))
// const hasFile = fs.statSync(path.join(ROOT_PATH, '/build/lib'))
// console.log(hasFile)
/**
 * 防止dll生成失败
 */
const plugins = process.env.MODE === 'development' ? [
  new webpack.DllReferencePlugin({
    manifest: require('../lib/manifest.json'),
    context: ROOT_PATH
  })
] : null
console.log('src: ', SRC_PATH)
const baseConfig = {
  mode: 'development', // production, development
  entry: {
    index: path.resolve(SRC_PATH, 'index.tsx')
  },
  output: {
    path: BUILD_PATH,
    filename: 'js/[name].js'
  },
  // devtool: 'eval-source-map',
  devServer: {
    port: 1998,
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  resolve: {
    alias: {
      '@': SRC_PATH
    },
    extensions: ['.js', '.jsx', '.tsx', '.ts']
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
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.s?css?$/,
        include: SRC_PATH,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        exclude: path.resolve(ROOT_PATH, 'node_modules')
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins
}
module.exports = {
  baseConfig,
  ROOT_PATH,
  SRC_PATH,
  BUILD_PATH
}
