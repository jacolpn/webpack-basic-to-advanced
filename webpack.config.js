const path = require('path'); // pacote do node.

module.exports = {
    entry: './src/index.js', // configuração do arquivo de entrada.
    output: { // configuração do arquivo de saída.
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}
