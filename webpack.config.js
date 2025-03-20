const path = require('path');

module.exports = {
    entry: {
        taskpane: './src/taskpane/taskpane.js',
        commands: './src/commands/commands.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.css', '.html']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve static files from 'dist'
        },
        port: 8080,  // Ensure the port matches your manifest.xml
        hot: true    // Enable hot module replacement
    }
};