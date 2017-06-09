const path = require('path');

module.exports = () => {
  return {
    module: {
      loaders: [{
          test: /\.js$/,
          include: path.join(__dirname, '../src'),
          exclude: /(.*\.spec\.js$)/,
          loader: 'istanbul-instrumenter-loader',
          query: {esModules: true}
        }
      ]
    }
  }
};
