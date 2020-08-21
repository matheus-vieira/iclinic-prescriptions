# iclinic-prescriptions

Serviço de prescrição médica


Projeto feito para teste da empresa iClinic

[![BCH compliance](https://bettercodehub.com/edge/badge/matheus-vieira/iclinic-prescriptions?branch=master)](https://bettercodehub.com/)

## Instruções

Informações de como rodar o projeto localmente:

### NPM

Não esqueça de rodar o comando `npm install`ou `npm i` para instalar as dependências.

### Arquivo .env

Crie um arquivo `.en` e um arquivo `.en.test` (se for rodar os testes) baseado no arquivo `.env.example` 

### Sequelize

Tenha um banco de dados para acesso do Sequelize, no meu caso utilizei o MySQL já instalado.

Para o arquivo `.env`

```env
DB_USERNAME=<nome do usuário de bnaco>
DB_PASSWORD=<senha do usuário informado acima>
DB_DATABASE=<nome do banco que irá ser criado a base de dados>
DB_HOST=<host do banco>
DB_DIALECT=<dialeto do banco>
```

Para o arquivo `.env.test` recomendo utilizar um banco de dados diferente, no meu caso apenas alterar a variável `DB_DATABASE` e adicionei o sufixo `test` ao nome da base.

## Informações de acesso aos serviços externos

Finalize a alteração dos arquivos `.en` e `.en.test` fornecendo o restante das variáveis.

As informações são disponibilizadas junto com link para o teste.

```env
<nome da API>_API_URL=<informe conforme o link>
<nome da API>_API_TOKEN=<informe conforme o link>
<nome da API>_API_RETRIES=<informe conforme o link>
<nome da API>_API_TIMEOUT=<informe conforme o link>
<nome da API>_API_TTL=<informe conforme o link>
```

Para esse projeto não adicionei as rotas às variáveis de ambiente pois achei desnecessário, porém pode ser legal para evitar strings *harcoded*.

## Rodando o projeto localmente

Acesse a pasta onde foi feito o clone do projeto e execute o comando:

```bash
npm run dev
```

A partir de agora você pode realizar requisições para os endpoints

* GET [Home "/"](http://localhost:5000/)
* GET [healthCheck "/"](http://localhost:5000/healthCheck)
* POST [Prescriptions "/v2/prescriptions"](http://localhost:5000/v2/prescriptions)


## Rodando os tests

Acesse a pasta onde foi feito o clone do projeto e execute o comando:

```bash
npm run all-tests
```

Após o comando será visto os testes sendo executados um a um.