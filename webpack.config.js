var config = {
    entry: './web/js/app/client.js',

    output: {
        path:'./',
        filename: './web/js/app/index.js',
    },

    devServer: {
        inline: true,
        port: 8089
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;