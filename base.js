const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const getPlugins = () => {
    const plugins = [
        new HTMLWebpackPlugin({
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
    ]; 
    if (isProd) {
        plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['@babel/polyfill', './index.js'],
    plugins: getPlugins(),
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        modules: false,
                                        targets: {
                                            browsers: 'last 5 versions, ie 10-11',
                                        },
                                    },
                                ]    
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.txt$/i,
                use: 'raw-loader',
            }
        ]
    }
};