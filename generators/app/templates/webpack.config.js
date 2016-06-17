var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config');

var webpackConfig = {
  entry: {
    app: path.resolve(config.source, 'js/application.js')
  },
  devtool: 'cheap-source-map',
  output: {
    path: config.dest,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, include: config.source, loaders: ['babel-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(config.source, 'index.html') })
  ],
  devServer: {
    contentBase: config.dest
  }
};

module.exports = webpackConfig;
