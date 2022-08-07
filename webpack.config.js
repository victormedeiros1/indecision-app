const path = require('path');

// bundle.js é o arquivo que reune todo o js da nossa aplicação

module.exports = {
  entry: './src/app.js', //bundle.js deverá ser gerado a partir desse arquivo
  output: {
    path: path.join(__dirname, 'public'), //bundle.js será gerado nesse diretório
    filename: 'bundle.js', // Nome do arquivo
  },
  module: {
    rules: [
      {
        loader: 'babel-loader', // Babel-loader transforma nosso bundle ES6/ES7 em ES5
        test: /\.js$/, // REGEX para todos os arquivos com terminação .js
        exclude: /node_modules/, // ignorar a node_moudules
      },
      {
        test: /\.s?css$/, //REGEX para todos os arquivos com terminação .scss
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // o browser nao entende scss/sass então sass-loader usará o node-sass
        // para fazer a conversão de scss/sass em css e o style-loader e css-loader
        // irá carregar os nossos arquivos css todos dentro de uma tag style.
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map', // O terminal indicará onde está o erro
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
};
