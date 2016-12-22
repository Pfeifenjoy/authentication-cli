var path = require("path")
var webpack = require("webpack")

module.exports = {
    devtool: "source-map",
    entry: {
        bundle: "./src/bundle.js",
        vendor: ["react"]
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "/build/client"),
        publicPath: "/build/client/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || "development")
        })
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
            }
        ]
    },
}
