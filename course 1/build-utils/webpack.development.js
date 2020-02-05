module.exports = (env) =>{
    return {
        devtool: "source-map",
        module:{
            rules: [
                {
                    test:/\.css$/,
                    use:["style-loader","css-loader"]
                }
            ]
        }
    }
}