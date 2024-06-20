// swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Fórum - NerdOps - API',
      version: '1.0.0',
      description: 'API para um fórum com usuários, posts e comentários'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de Desenvolvimento'
      }
    ]
  },
  apis: ['./src/routes/*.js', './src/models/*.js'] // Caminho para os arquivos de rotas e modelos
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
