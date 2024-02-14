// config-overrides.js
/* VERSIO 1
module.exports = function override(config, env) {
    // New config, e.g. config.plugins.push...
    config.module.rules = [...config.module.rules, 
        {
           
            resolve: {
                fallback: {
                  "path": require.resolve("path-browserify"),
                  "os": require.resolve("os-browserify/browser"),
                  "crypto": require.resolve("crypto-browserify"),
                  "stream": require.resolve("stream-browserify"),
                  "react-app-rewired": require.resolve("react-app-rewired")

                }
        }
      ]
    return config;
}

*/

function override(config: any): any {
  // Do any custom configuration here
  config.module.rules = [...config.module.rules, 
    {
       
        resolve: {
            fallback: {
              "path": require.resolve("path-browserify"),
              "os": require.resolve("os-browserify/browser"),
              "crypto": require.resolve("crypto-browserify"),
              "stream": require.resolve("stream-browserify"),
              "react-app-rewired": require.resolve("react-app-rewired")
            }
          }
    }
  ]

  return config;
}
module.exports = override;
