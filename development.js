const path = require('path');
const merge = require('webpack-merge');
const base = require('./base');

module.exports = merge(base, {
    devtool: 'source-map',
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    }
});