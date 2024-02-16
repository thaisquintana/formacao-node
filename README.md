## Crie um package.json com informações básicas do projeto, com o seguinte comando:
``npm init -y``

#### Resulado:
```bash
{
  "name": "formacao-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## Para poder visualizar o retorno do servidor no terminal é recomendado que se instale o HTTPIE:
Para instalar é preciso ter o [homebrew](https://brew.sh/) instalado.

``brew install httpie``


# Conceitos:

## HTTP - Methods

```bash
  - HTTP
    - Método HTTP
      - GET => Buscar um recurso no backend
      - POST => Criar um recurso no backend
      - PUT => Atualizar um recurso no backend
      - PATCH => Atualizar uma informação específica de um recurso no backend
      - DELETE => Remove um recurso no backend
    - URL
```

## Stateful
Toda vez que variáveis são criadas dentro do projeto que esteja rodando nesse projeto, elas serão salvas em mémoria, isso significa, que a aplicação é Stateful.

## Stateless
Aplicações Stateless por sua vez, não depende de informações salvas em memória do projeto, ou seja suas informações serão salvas em um banco de dados (por exemplo), assim ao parar a aplicação o desenvolvedor não irá perder nenhuma informação quando a aplicação for parada.

## JSON - JavaScript Object Notation
Estrutura de dados muito conhecida entre frontend e backend, ou backend e outros backends, para fazer a transição de dados.


## Cabeçalhos ou HEADERS
Cabeçalhos da requisição(request) ou da resposta(response) são chamados de ``metadados``.
São informações que tanto o front quando o backend saibam lidar com uma requisição da melhor forma. Ou seja, cabeçalhos nada mais são do que informações adicionais enviados à API e nada tem a ver com a resposta do backend para o frontend, mas sim como o dado enviado pode ser interpretado pelo frontend.

#### Exemplo:

```before```

![Código sem cabeçalho explicitado na requisição](https://github.com/thaisquintana/formacao-node/assets/5264498/68e384a3-4103-4785-a7d2-986a9c9dd8bd)

![Resposta da aplicação sem o cabeçalho indicando o content-type](https://github.com/thaisquintana/formacao-node/assets/5264498/61123bfe-b546-4da7-9297-ed4abe6b97ef)

```after```

![Código aplicando o cabeçalho para explicitar o retorno que deseja receber de formatação do backend](https://github.com/thaisquintana/formacao-node/assets/5264498/37a9d0f1-fd1a-4ff9-8789-b3a4e5f9009d)

![Retorno do array formatado como JSON, para facilitar a leitura da resposta. Isso acontece pela inclusão do content-type no request do cabeçalho](https://github.com/thaisquintana/formacao-node/assets/5264498/11d91c5a-2fde-48b6-b365-0d90342f7eef)
