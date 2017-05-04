const { resolve, join } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    filename: 'app.js',
    path: resolve(__dirname, 'public'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ],
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: 'url-loader?limit=10000&name=[name]-[hash].[ext]&publicPath=&outputPath=assets/images/'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('css/styles.css')
  ],
  devServer: {
    contentBase: join(__dirname, 'public'),
    publicPath: '',
    port: 8080,
    host: '0.0.0.0',
    historyApiFallback: true,
    hot: true,
    inline: true
  }
}
