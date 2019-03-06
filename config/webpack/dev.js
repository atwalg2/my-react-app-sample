'use strict';
process.env.NODE_ENV = 'development';

const merge = require('webpack-merge');
const config = require('./common.js');
const webpack = require('webpack');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
