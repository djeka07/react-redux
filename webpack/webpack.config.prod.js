const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
require('babel-polyfill')

module.exports = {
  mode: 'production',
  entry: {
    main: [
      'babel-polyfill',
      './src/client/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, '..', '/dist/'),
    filename: './[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            },
          },
          'sass-loader'
        ]
      })
    }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].style.css', allChunks: true }),
  ]
}
