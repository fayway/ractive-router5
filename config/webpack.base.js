const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = () => {
  return {
    target: 'node',
    externals: [nodeExternals()],
    output: {
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
      devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    devtool: "#inline-cheap-module-source-map",
    plugins: [
      new webpack.DefinePlugin({
        '__IS_DEV__': false,
        'DEBUG': true,
      })
    ]
  }
};
