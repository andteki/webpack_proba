const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    mode: 'production',
    entry: './src/app.js',
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'    
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Ap',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]
}

module.exports = config