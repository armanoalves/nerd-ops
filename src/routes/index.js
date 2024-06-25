const bodyPaser = require("body-parser");

const usuario = require("./usuarioRoutes");
const comentario = require("./comentarioRoutes");
const post = require("./postRoutes")
const authRoutes = require("../controllers/auth");

module.exports = app => {
    app.use(
        bodyPaser.json(),
        usuario,
        comentario,
        post,
    );

    app.use('/api/user', authRoutes);
}