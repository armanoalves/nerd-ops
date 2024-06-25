const cors = require("cors")
const express = require("express");
const routes = require("./src/routes");

require('dotenv').config();

const { swaggerUi, swaggerDocs } = require("./src/utils/swagger");

const app = express();
const port = 3000; 

app.use(cors())

// Middleware para interpretar JSON
app.use(express.json());

routes(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => console.log(`listening on port ${port}\n Acesse a API na rota http://localhost:3000/api-docs`));

module.exports = app;