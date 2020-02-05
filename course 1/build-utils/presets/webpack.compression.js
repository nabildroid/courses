const Compression = require("compression-webpack-plugin");

module.exports = () => ({
    plugins: [ 
        new Compression()
    ]
})