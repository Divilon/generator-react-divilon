var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var sourceDir = path.resolve(__dirname, '<%= sourceDir %>');
var destDir = path.resolve(__dirname, '<%= destDir %>');

var webpackConfig = {
  entry: {
    app: path.resolve(sourceDir, 'js/application.js')
  },
  devtool: 'cheap-source-map',
  output: {
    path: destDir,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, include: sourceDir, loaders: ['babel-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(sourceDir, 'index.html') })
  ],
  devServer: {
    contentBase: destDir
  }
};

module.exports = webpackConfig;
