const bodyPaser = require("body-parser");

const usuario = require("./usuarioRoutes");

module.exports = app => {
    app.use(
        bodyPaser.json(),
        usuario
    );
}