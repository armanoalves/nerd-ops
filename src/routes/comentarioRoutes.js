const { Router } = require("express");

const ComentarioController = require("../controllers/ComentarioController");
 
const router = Router();
router
 .get("/comentario", ComentarioController.buscaTodosComentarios)
 .post("/comentario", ComentarioController.criarComentario)
 .put("/comentario/:id", ComentarioController.atualizarComentario)
 .delete("/comentario/:id", ComentarioController.deletarComentario)
module.exports = router;