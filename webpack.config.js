const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PRODUCTION = process.env.NODE_ENV === "production";
const DEVELOPMENT = process.env.NODE_ENV === "developer";

const PLUGINS = DEVELOPMENT ? [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
] : [
  // new webpack.optimize.UglifyJsPlugin()
];
PLUGINS.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION),
  })
)
const ENTRY = DEVELOPMENT ? [
  './src/index',
  'webpack-hot-middleware/client'

] : [
  './src/index'
]
module.exports = {
  entry: ENTRY,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
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
    rules: [
      {
        test: /\.js$/,
        use: [
          'react-hot-loader',
          'babel-loader',
          'eslint-loader'
        ],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), 'node_modules'],
    extensions: ['.js', "jsx", "png", "jpg", "jpeg"]
  },
  plugins: PLUGINS
};
