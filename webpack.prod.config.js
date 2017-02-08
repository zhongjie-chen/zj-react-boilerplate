const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', './app/app.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle-[name]-[hash:8].js",
    chunkFilename: '[name].[chunkhash].chunk.js',
    hash: true, // 开启hash编码功能
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.css$/, loader: 'style!css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss-loader'},
      {test: /\.(jpg|png|svg)$/, loader: 'url?limit=88192'}
    ]
  },
  postcss: function () {
    return [require('postcss-modules-values'), require('precss')];
  },
  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
       title: 'app',
       filename : 'new_index.html',
    })

  ]
};
