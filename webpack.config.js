const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "build-[hash].js"
    },
    devtool: "eval-source-map",

    devServer: {
        contentBase: "./build/",
        historyApiFallback: true,
        inline: true,
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader"
                }
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]'
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: {
                    loader: "style-loader!css-loader!sass-loader!"
                }
            }
        ]
    },

    // resolve: {
    //     alias: {
    //         'jquery': __dirname + '/app/lib/js/vue-jquery.js'
    //     }
    // },

    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}