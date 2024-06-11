const { Router } = require("express");

const PessoaController = require("../controllers/usuarioController");

const router = Router();

router
    .get("/usuario", PessoaController.buscaTodosUsuarios)
    .post("/usuario/", PessoaController.criarUsuario)
    .put("/usuario/:id", PessoaController.atualizarUsuario)
    .delete("/usuario/:id", PessoaController.deletarUsuario);

module.exports = router;
