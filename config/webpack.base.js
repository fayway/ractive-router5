const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = () => {
  return {
    output: {
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
      devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    target: 'node',
    externals: [nodeExternals()],
    devtool: "inline-cheap-module-source-map",
    plugins: [
      new webpack.DefinePlugin({
        '__IS_DEV__': false,
        'DEBUG': true,
      })
    ]
  }
};
