const path = require('path');
const merge = require('webpack-merge');
const base = require('./base');

module.exports = merge(base, {
    mode: 'production',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'build'),
        hashFunction: 'sha256',
        library: 'MyLibrary',
        libraryTarget: 'window'
    }
});