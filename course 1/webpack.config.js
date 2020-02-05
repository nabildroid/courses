const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

const presetsConfig = require("./build-utils/loaderPresets");


module.exports =({ mode, presets} = {mode: "production", presets: []})=>{
    const conf = WebpackMerge(
        {
            mode,
            output:{
                filename: "bundle.js"
            },
            module: {
                rules: [
                    {
                        test: /\.jpe?g$/,
                        use: {
                            loader: "url-loader",
                            options: {
                                limit: 5000
                            }
                        }
                    }
                ]
            },
            plugins:[
                new HtmlWebpackPlugin,
                new webpack.ProgressPlugin()
            ],
            devServer: {
                host: '0.0.0.0',
                disableHostCheck: true,
                allowedHosts: ['.gitpod.io']
            },
        },
        modeConfig(mode),
        presetsConfig({mode,presets})
    );
    return conf;
};