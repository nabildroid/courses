const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({mode})=>{
    return {
        mode,
        entry: "./src/main.js",
        output:{
            filename:"main.js"
        },
        module:{
            rules:[
                {
                    test: /\.html$/,
                    use: "html-loader"
                },
                {
                    test: /\.css$/,
                    use: [miniCssExtractPlugin.loader,"css-loader"]
                }
            ]
        },
        plugins:[
            new htmlWebpackPlugin(),
            new miniCssExtractPlugin({
                ignoreOrder: true,
            })
        ]
    }
};
