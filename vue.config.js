let port = 7070,
    title = "kashdkjhsa"
const path = require('path')
const webpack = require('webpack')
const before = require('./moke')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: false,
    publicPath:  process.env.NODE_ENV==="production"?"":"", // 部署应用包时的基本 URL
    outputDir: "./src/server/public",
    devServer: {
        port,
       // before,
        proxy: {
            // 代理 /dev-api/user/login 到 http://127.0.0.1:3000/user/login
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.VUE_APP_BASE_IP, //`http://127.0.0.1:3030/`,
                changeOrigin: true,
                pathRewrite: {
                    ["^" + process.env.VUE_APP_BASE_API]: "/data"
                }
            }
        },
    },
    configureWebpack: {
        name: title,
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    },
    chainWebpack(config) {
        config.module.rule("svg")
            .exclude.add(resolve("./src/icon"))
        config.module.rule("icon")
            .test(/\.svg$/)
            .include.add(resolve("src/icon")).end()
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            .options({
                symbolId: "icon-[name]"
            })
    },
}