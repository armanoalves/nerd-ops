# NERD OPS

## 📜 Descrição

Desafio técnico de criação de uma API para gerenciar posts e comentários de um fórum de tecnologia.

![Demonstração da API](https://i.imgur.com/bWJshth.gif)

## ✨ Funcionalidades

- **API REST**: Transformação da aplicação Screenmatch em uma API REST.
- **Express**: Utilizada para configurar e executar a aplicação com um servidor embutido.
- **Controller**: Criação da classe responsável por receber as requisições.
- **Rotas e Requisições**: Implementação completa das rotas GET, POST, UPDATE e DELETE.
- **Filtro**: Filtro de posts apartir de título ou nome do autor.

## 📚 Tecnologias Utilizadas

- ![JavaScript](https://img.shields.io/badge/JavaScrict-grey?style=for-the-badge&logo=javascript)
- ![Express](https://img.shields.io/badge/Express-grey?style=for-the-badge&logo=express)
- ![Sequelize](https://img.shields.io/badge/Sequelize-grey?style=for-the-badge&logo=sequelize)
- ![Swagger](https://img.shields.io/badge/Swagger-grey?style=for-the-badge&logo=swagger)
- ![SQLite](https://img.shields.io/badge/SQLite-grey?style=for-the-badge&logo=sqlite)

## 📂 Estrutura do Projeto
```
nerd-ops/
  ├── node_modules/
  ├── src/
  │   ├── config/
  │   ├── controllers/
  │   ├── migrations/
  │   ├── models/
  │   ├── routes/
  │   ├── seeders/
  │   └── utils/
  ├── .env
  ├── .env-example
  ├── .gitignore
  ├── .sequelizerc
  ├── database.js
  ├── database.sqlite
  ├── LICENSE
  ├── package-lock.json
  ├── package.json
  ├── README.md
  └── server.js
```

## 📋 Como Executar

1 - Instalando as dependências do projeto:

```
npm install
```

2 - Rodar as migrations:
```
npx sequelize-cli db:migrate
```

3 - Iniciar o projeto:
```
npm run dev 
```

4 - Acessar a API apartir da URL do Swagger

```
http://localhost:3000/api-docs
```

## 🧑‍💻 Feito por:

Armano Alves
Sarah Ocy
Renan Lima 

