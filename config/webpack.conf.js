const wkcMerge = require('webpack-merge');
const process = require('process');

const defaultEnv = 'test';
const ENV = process.env.NODE_ENV || defaultEnv;

const baseWebpackConfig = require('./webpack.base')();
const envWebpackConfig = require('./webpack.' + ENV)();

const mergedConfig = wkcMerge(baseWebpackConfig, envWebpackConfig);
module.exports = mergedConfig;