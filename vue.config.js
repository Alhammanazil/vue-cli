const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new TerserPlugin({
        terserOptions: {
          ecma: 5,
          ie8: true,
        },
      }),
    ],
  },
};
// Remove the duplicate declaration of TerserPlugin
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new TerserPlugin({
                terserOptions: {
                    ecma: 5,
                    ie8: true,
                },
            }),
        ],
    },
};
