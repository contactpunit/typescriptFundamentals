const path = require('path')

module.exports = {
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, dist)
    },
    devtools: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}