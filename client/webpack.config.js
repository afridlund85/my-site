var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
}