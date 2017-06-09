const buble = require('rollup-plugin-buble');
const pkg = require( './package.json' );

export default {
  entry: 'src/index.js',
  moduleName: 'RactiveRouter5',
  targets: [
    { dest: pkg.main, format: 'umd' },
    { dest: pkg.module, format: 'es' }
  ],
  plugins: [
    buble()
  ]
};
