#!/usr/bin/env node

const webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const config = require("./webpack.config")
const internalIp = require("internal-ip")

const port = 3000
const ip = internalIp.v4()

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    },
    https: false,
    proxy: {
      "/api/v1": {
          target: "http://localhost:4000",
          secure: false,
          pathRewrite: { "/api/v1": "" }
      }
    }

}).listen(port, '0.0.0.0', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log(' --------------------------------------');
    console.log(`    Local: http://0.0.0.0:${port}`);
    console.log(` External: http://${ip}:${port}`);
    console.log(' --------------------------------------');
});
