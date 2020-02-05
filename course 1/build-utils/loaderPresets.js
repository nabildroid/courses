const WebpackMerge = require("webpack-merge");

const applyPresets = (env) => {
    const {presets} = env;

    const mergePresets = [].concat(...[presets]);
    const mergeConfig = mergePresets.map( presetsName =>
        require(`./presets/webpack.${presetsName}`)(env)
    );

    return WebpackMerge({}, ...mergeConfig);
}

module.exports = applyPresets;