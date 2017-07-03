const webpack = require('webpack');
const path = require('path');

module.exports = () => {
  return {
    entry: [
      './example/src/main.js'
    ],
    output: {
      filename: './example/dist/bundle.js',
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
        }
      ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, './')
    }
  };
};