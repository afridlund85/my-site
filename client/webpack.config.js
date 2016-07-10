const path = require('path')

const config = {
  entry: './src/index',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel', 'eslint-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.sass'],
    root: [path.join(__dirname, './src')]
  }
}

module.exports = config