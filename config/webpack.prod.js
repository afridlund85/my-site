const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const { rootPath } = require('./helpers')

const prodConfig = {
  devtool: 'inline-source-map',
  output: {
    filename: 'app-[hash].js',
    path: rootPath('dist'),
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: rootPath('src/index.html'),
      inject: 'body',
      favicon: rootPath('src/assets/images/nodejs.png')
    }),
    new ExtractTextPlugin('css/styles.css')
  ]
}

module.exports = webpackMerge(commonConfig, prodConfig)
