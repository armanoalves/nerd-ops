const database = require("../models");
const sequelize = require("sequelize");

class PostController{
    static async lerPosts(req, res) {
      try {
          const posts = await database.Post.findAll();
          return res.status(200).json(posts);
      } catch (error) {
          return res.status(500).json(error.message);
      }
  }

  static async criarPost(req, res) {
      const novoPost = req.body;

      try {
          const novoPostCriado = await database.Post.create(novoPost);
          return res.status(201).json(novoPostCriado);
      } catch (error) {
          return res.status(500).json(error.message);
      }
  }

  static async atualizarPost(req, res) {
      const id = req.params.id;
      const novasInformacoes = req.body;
      try {
          await database.Post.update(novasInformacoes, { where: { id: Number(id) } });
          const postAtualizado = await database.Post.findOne({ where: { id: Number(id) } });

          return res.status(200).json(postAtualizado);
      } catch (error) {
          return res.status(500).json(error.message);
      }
  }

  static async apagarPost(req, res) {
      const id = req.params.id;

      try {
          await database.Post.destroy( { where: { id: Number(id) } });

          return res.status(200).json({ mensagem: `ID com o número ${id} foi deletado!` });
      } catch (error) {
          
      }
  }
}



  module.exports = PostController;