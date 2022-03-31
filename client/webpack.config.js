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
