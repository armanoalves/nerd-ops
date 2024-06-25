const bodyPaser = require("body-parser");

const usuario = require("./usuarioRoutes");
const comentario = require("./comentarioRoutes");
const post = require("./postRoutes")

module.exports = app => {
    app.use(
        bodyPaser.json(),
        usuario,
        comentario,
        post,
    );
}