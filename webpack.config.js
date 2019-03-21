const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },

  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],

  devServer: {
    historyApiFallback: true,
    port: '8080',
    open: 'Google chrome'
  }
};
