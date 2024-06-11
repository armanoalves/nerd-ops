const bodyPaser = require("body-parser");

const usuario = require("./usuarioRoutes");
const comentario = require("./comentarioRoutes");

module.exports = app => {
    app.use(
        bodyPaser.json(),
        usuario,
        comentario
    );
}