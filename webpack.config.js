const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map',
  // module: {
  //   loaders: [{
  //     test: /\.js$/,
  //     loader: 'babel-loader',
  //     exclude: /node_modules/,
  //     query: {
  //       presets: [
  //         'babel-preset-es2015-ie',
  //         'babel-preset-react',
  //         'babel-preset-stage-0',
  //       ]
  //     }
  //   }, {
  //     test: /\.css$/, loader: 'style!css?modules&localIdentName=[name]-[local]--[hash:base64:5]'
  //   }, {
  //     test: /\.(jpg|png|svg)$/, loader: 'url?limit=8192'
  //   }]
  // },
  module: {
    // preLoaders: [{
    //   test: /\.js$/,
    //   exclude: /node_modules/,
    //   loader: 'eslint-loader'
    // }],
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot-loader', 'babel-loader'],
      include: path.join(__dirname, 'src')
    }]
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), 'node_modules'],
    extensions: ['.js', "jsx", "png", "jpg", "jpeg"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin()

  ]
};
