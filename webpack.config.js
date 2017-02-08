const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    common: [],
    index: [
      "webpack-dev-server/client?http://localhost:9000",
      "webpack/hot/only-dev-server",
      path.resolve("./src/index.js")
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.css$/, loader: 'style!css?modules&localIdentName=[name]-[local]--[hash:base64:5]'},
      {test: /\.(jpg|png|svg)$/, loader: 'url?limit=8192'}
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', "jsx", "png", "jpg", "jpeg"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()

  ]
};
