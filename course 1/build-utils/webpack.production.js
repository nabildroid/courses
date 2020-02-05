const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = (env) =>{
    return {
        devtool: "nosources-source-map",
        output:{
            filename: "bundle.js"
        },
        module:{
            rules:[
                {
                    test: /\.css$/,
                    use:[MiniCssExtractPlugin.loader,"css-loader"]
                }
            ]
        },
        plugins:[new MiniCssExtractPlugin()],
    }
}