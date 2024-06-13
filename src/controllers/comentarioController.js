const database = require("../models");
const sequelize = require("sequelize");

class ComentarioController {

  static async buscaTodosComentarios(req, res) {
    try {
      const todosOsComentarios = await database.Comentario.findAll();
      return res.status(200).json(todosOsComentarios);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }


  static async criarComentario(req, res) {
    const novoComentario = req.body;
    try {
      const novoComentarioCriado = await database.Comentario.create(novoComentario);
      return res.status(200).json(novoComentarioCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarComentario(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Comentario.update(novasInfos, { where: { id: Number(id) } });
      const comentarioAtualizado = await database.Comentario.findOne( { where: { id: Number(id) }} ); 

      return res.status(200).json(comentarioAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletarComentario(req, res) {
    const { id } = req.params;
    try {
      await database.Comentario.destroy( { where: { id: Number(id)} } );

      return res.status(200).json({ mensagem: `ID com o número ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

}

module.exports = ComentarioController;