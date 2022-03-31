<<<<<<< HEAD
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
=======
const webpack = require('webpack');

module.exports = {
     fallback: {
            util: require.resolve('util/'),
            assert: require.resolve('assert/'),
            stream: require.resolve('stream-browserify'),
            zlib: require.resolve('browserify-zlib'),
        },
    plugins: [
        new webpack.ProvidePlugin({
             Buffer: ['buffer', 'Buffer'],
             process: 'process/browser',
        }),
    ],
}
>>>>>>> 633a2e9f540a305dfb2a82c2bc732033f659cc4c
