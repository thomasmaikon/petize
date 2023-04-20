# Petize

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Projeto

Para rodar em sua maquina este projeto siga os seguintes passos:
1 - Instalar o node [NodeJS](https://nodejs.org/en) na versao latest, ao baixar o executaval, clicar nele e depois so em next, next next...

2 - Dar um git clone no projeto ou baixar a versao zip, extrai-la e entrar no diretorio

## Dependencias

3- Antes de executar a aplicação rode o comando `npm install` para baixar as dependecias do projeto

## Aplicação

4 - Execute o comando `ng serve` para executar o servico em modo de desenvolvimento. 
5 - Navege para a URL `http://localhost:4200/`.

## Buildar a aplicação

Execute `ng build` para buildar o projeto. A build estara presente no diretorio/pasta `dist/` .

## Versões
NVM (0.39.1)
Node (16.15.0)

### Estrutura do projeto

A aplicacao esta dividida entre 2 componentes, os quais sao o Busar e Perfil, ambos representam as telas do sistema. Estes componentes utilizam os services para poder realizar troca de informações indiretamente utilizando subscritions

A aplicacao conta com pacote service, a qual contem todos os serviços utilizados pela aplicação.
Seu objetivo é centralizar as operações como conversao de dados, envio de requisicões e regra de negócio em geral.

A mesma também conta com pacote de entidades, que contém as classes necessarias para fazer a abstração dos dados.

### Bibliotecas

Inicialmente cogitou-se a utilização da material ui para o angular, toda via resolvi me aventurar aplicando css manualmente. 
Foi levado em consideração também a biblioteca do angular para exibição dos icones, porém eles estavam muito diferentes do esperado, então optei por trocar para a versao gratuita do font awsome, apesar de saber que existem outras melhores
