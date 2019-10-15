const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const FriendlyErrors = require('friendly-errors-webpack-plugin');

module.exports = {
    stats: {
        children: false
    },

    entry: {
        flexgrid: './src/flexgrid.scss'
    },

    output: {
        path: path.resolve(__dirname, './dist'),
    },

    mode: 'none',

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new FriendlyErrors(),
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin('[name].css'),
        new CssoWebpackPlugin({
            pluginOutputPostfix: 'min'
        })
    ]
}
