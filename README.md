# webpack-basic-to-advanced

## Comando utilizado:
- **Iniciar node:** npm init -y
- **Instalar webpack:** npm i webpack webpack-cli
- **Gerar o build:** npx webpack
- **Instalar loader css:** npm i --save-dev style-loader css-loader *(usar o mini-css-extract-plugin)*
- **Instalar loader imagem:** npm i --save-dev file-loader
- **Instalar loader sass:** npm i --save-dev sass-loader AND npm i --save-dev node-sass
- **Instalar loader babel:** npm i --save-dev babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-object-rest-spread
- **Instalar loader html:** npm i --save-dev html-loader
- **Instalar loader txt:** npm i --save-dev raw-loader
- **Instalar plugin mini-css-extract-plugin (separar o css no bundle):** npm i --save-dev mini-css-extract-plugin
- **Instalar plugin terser-webpack-plugin:** npm i --save-dev terser-webpack-plugin
- **Instalar plugin dotenv-webpack:** npm i --save-dev dotenv-webpack
- **Instalar plugin html-webpack-plugin:** npm i --save-dev html-webpack-plugin

## Conceitos:
- **Exigências do webpack:** Node.js 10.13+ e recursos de ES5;
- **Polyfills:** Maneira de rodar o wepack em navegadores mais antigos; *(ex: Funções criadas com base na função nova, para se adaptar nos navegadores mais antigos)*
- **Entry/Entry point:** Onde as dependências do projeto são declaradas para o webpack, geralmente o arquivo `index.js`;
- **Output:** Saída do empacotamento do webpack, por default fica na `dist` e o arquivo é o `main/js`;
- **Loader:** Recurso que permite o webpack processar diversos tipos de arquivos, além de JavaScript; *(ex: CSS, SCSS, JSON...)*
- **Plugins:** São funcionalidades (pacotes) que podem ser adicionadas ao nosso projeto;
- **Mode/Mono:** Forma que o webpack vai rodar no projeto que está sendo executado; *(ex: production ou development)*
-
