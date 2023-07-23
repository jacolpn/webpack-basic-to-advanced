# webpack-basic-to-advanced

## Comando utilizado:
- **Iniciar node:** npm init -y
- **Instalar webpack:** npm i webpack webpack-cli
- **Gerar o build:** npx webpack
- **Instalaer loader css:** npm i --save-dev style-loader css-loader

## Conceitos:
- **Exigências do webpack:** Node.js 10.13+ e recursos de ES5;
- **Polyfills:** Maneira de rodar o wepack em navegadores mais antigos; *(ex: Funções criadas com base na função nova, para se adaptar nos navegadores mais antigos)*
- **Entry/Entry point:** Onde as dependências do projeto são declaradas para o webpack, geralmente o arquivo `index.js`;
- **Output:** Saída do empacotamento do webpack, por default fica na `dist` e o arquivo é o `main/js`;
- **Loader:** Recurso que permite o webpack processar diversos tipos de arquivos, além de JavaScript; *(ex: CSS, SCSS, JSON...)*
- **Plugins:** São funcionalidades (pacotes) que podem ser adicionadas ao nosso projeto;
- **Mode/Mono:** Forma que o webpack vai rodar no projeto que está sendo executado; *(ex: production ou development)*
-
