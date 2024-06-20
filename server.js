const express = require("express");
const routes = require("./src/routes");
const { swaggerUi, swaggerDocs } = require('./swagger');

const app = express();
const port = 3000; 

routes(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;