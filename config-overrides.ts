// config-overrides.js
module.exports = function override(config, env) {
    // New config, e.g. config.plugins.push...
    config.module.rules = [...config.module.rules, 
        {
           
            resolve: {
                fallback: {
                  "path": require.resolve("path-browserify"),
                  "os": require.resolve("os-browserify/browser"),
                  "crypto": require.resolve("crypto-browserify"),
                  "stream": require.resolve("stream-browserify")

                }
        }
      ]
    return config
}