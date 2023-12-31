const path = require('path'); // pacote do node.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const DotenvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared'
        },
        test: {
            import: './src/test.js',
            dependOn: 'shared'
        },
        shared: 'lodash'
    }, // configuração do arquivo de entrada.
    output: { // configuração do arquivo de saída.
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js' // gerar hash unica em cada build.
    },
    mode: 'development', // 'production'
    target: 'node',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 8000,
        historyApiFallback: { index: 'index.html' }, // precisa ter instalado o html-webpack-plugin para gerar o index automaticamente.
        hot: true
    },
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
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/,
                use: ['ts-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.(ttf|woff)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: { extensions: ['.tsx', '.ts', '.js'] },
    plugins: [
        new CleanWebpackPlugin(), // limpar os arquivos antigos gerados no build.
        new MiniCssExtractPlugin({
            // filename: 'styles.css' // nome do arquivo css que vai ser gerado separado do bundle.
            filename: '[name].[contenthash].css' // gerar hash unica em cada build.
        }),
        new webpack.DefinePlugin({ // definicao de constantes globais.
            VERSION: JSON.stringify('1.0.0'),
            PORT: JSON.stringify('8080')
        }),
        new DotenvPlugin(),
        new HtmlWebpackPlugin({ filename: 'index.html', title: 'Modes' }), // gerar o index.html automaticamente, nao precisando criar o public/index.html
        new webpack.ProvidePlugin({ _: 'lodash' })
    ],
    optimization: { runtimeChunk: true }
}
