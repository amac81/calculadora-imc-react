# Calculadora de IMC (projeto React Js Simples)

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/amac81/calculadoraIMC-react/blob/main/LICENSE) 

# Acerca do projeto

Calculadora de IMC com React, html, css and Javascript.

## Qual é a utilidade deste repositório

Este projeto demonstra:
1. Criação de Componentes no React
2. Comunicação entre o componente pai e filho

## Prerequisitos

### Instalar o Node JS
Consultar https://nodejs.org/en/

Clone o projeto localmente

Instale todos os pacotes npm. Aceder à pasta do projeto (/../imc-calc/) e digite o seguinte comando para instalar todos os pacotes npm:

```bash
npm install
```

Para executar a aplicação digite o seguinte comando na mesma pasta (/../imc-calc/)

```bash
npm start
```

A aplicação é executado em **http://localhost:5173**


## Design da aplicação

#### Componentes

1. **ImcCalc**: Componente responsável pela entrada de dados (altura e peso), pela sua validação e chamada de função de cálculo de IMC, implementada no componente principal App.jsx.

2. **ImcTable**: Este Componente mostra informações gerais sobre o IMC e informações personalizadas de acordo com os dados de altura e peso inseridos pelo utilizador. Este componente obtém os dados a partir de um ficheiro js na pasta data.

3. **Button**: Este Componente representa um elemento de botão. É renderizado dentro dos Componentes ImcTable e ImcCalc. Há uma relação de pai e filho entre esses componentes. Esta composição de componentes facilita a organização e a reutilização de código em aplicações React.


# Autor

Arnaldo Manuel de Almeida Canelas

https://www.linkedin.com/in/arnaldocanelas
