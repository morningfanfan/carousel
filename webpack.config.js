var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        entry1: './jsx/carousel.jsx'
    },
    output: {
        path: __dirname,
        filename: 'carousel.entry.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }]
    },
    plugins: [commonsPlugin]
};