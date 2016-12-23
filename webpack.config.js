var path = require("path")
var webpack = require("webpack")
var WebpackNotifierPlugin = require("webpack-notifier")

module.exports = {
    devtool: "source-map",
    entry: {
        bundle: "./demo/bundle.js",
        vendor: ["react"]
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "/build/client"),
        publicPath: "/build/client/"
    },
    plugins: [
        new WebpackNotifierPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: [
                        "es2015",
                        "stage-0",
                        "react",
                        "react-hmre"
                    ],
                    plugins: [
                        "transform-class-properties",
                        "transform-decorators-legacy"
                    ]
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
}
