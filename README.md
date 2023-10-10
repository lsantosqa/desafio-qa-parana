# Case Técnico - Quality Assurance - 2023

Este é um projeto para automação de testes, utilizando o framework [Cypress](https://cypress.io) e a linguagem de programação Javascript.


Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador.

- [git](https://git-scm.com/) (estou usando a versão `2.39.3`)
- [Node.js](https://nodejs.org/en/) (estou usando a versão `v20.8.0`)
- npm (estou usando a versão `10.1.0`)
- Clone o projeto

## Instalação e inicialização do Cypress

1. Na raiz do projeto, execute o comando `npm install` e garanta que as dependências Cypress (`13.3.0`) e [AJV](https://ajv.js.org/) (`8.12.0`) foram baixadas

2. Logo após, já é possível executar os testes, basta executar o comando `npm run test`

3. No terminal, deve ser possível visualizar a execução dos testes

> **Obs. :**  Também é possível executar os testes no modo interativo do _Test Runner_ do Cypress, conforme os passos abaixo:
>
>
1. Execute o comando `npm run cy:open` para abrir o _Test Runner_ do Cypress pela primeira vez modo interativo
2. Com o _Test Runner_ aberto, selecione a opção `E2E Testing`, o navegador onde deseja executar os testes e acione `Start E2E Testing in ...`
3. Clique sob o arquivo `.spec` (arquivos que contém os cenários de testes) que deseja executar