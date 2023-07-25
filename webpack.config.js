const path = require('path'); // pacote do node.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const DotenvPlugin = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js', // configuração do arquivo de entrada.
    output: { // configuração do arquivo de saída.
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()] // minificar o JS gerado no bundle.
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: ['file-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css' // nome do arquivo css que vai ser gerado separado do bundle.
        }),
        new webpack.DefinePlugin({ // definicao de constantes globais.
            VERSION: JSON.stringify('1.0.0'),
            PORT: JSON.stringify('8080')
        }),
        new DotenvPlugin()
    ]
}
