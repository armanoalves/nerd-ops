const database = require("../models");
const sequelize = require("sequelize");
const { Op } = require('sequelize');


class PostController{
    static async lerPosts(req, res) {
      try {
          const posts = await database.Posts.findAll();
          return res.status(200).json(posts);
      } catch (error) {
          return res.status(500).json(error.message);
      }
  }

  static async criarPost(req, res) {
    
    const { titulo, descricao, usuario_id } = req.body;

      try {
        const usuario = await database.Usuario.findByPk(usuario_id);
        if (!usuario) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }

        const novoPost = { titulo, descricao, usuario_id };
        const novoPostCriado = await database.Posts.create(novoPost);

        return res.status(201).json(novoPostCriado);
      } catch (error) {
          return res.status(500).json(error.message);
      }
  }

  static async atualizarPost(req, res) {
      const id = req.params.id;
      const novasInformacoes = req.body;
      try {
          await database.Posts.update(novasInformacoes, { where: { id: Number(id) } });
          const postAtualizado = await database.Posts.findOne({ where: { id: Number(id) } });

          return res.status(200).json(postAtualizado);
      } catch (error) {
          return res.status(500).json(error.message);
      }
  }

  static async apagarPost(req, res) {
      const id = req.params.id;

      try {
          await database.Posts.destroy( { where: { id: Number(id) } });

          return res.status(200).json({ mensagem: `ID com o número ${id} foi deletado!` });
      } catch (error) {
          
      }
  }

  static async buscarPostPorNome(req, res) {
    const { titulo, usuario } = req.query;

    if (!titulo && !usuario) {
        return res.status(400).json({ message: "É necessário passar o título ou nome do autor do post para busca."})
    }

    try {

        const criterioDeBusca = {};

        if (titulo) {
            criterioDeBusca.titulo = {
                [Op.like]: `%${titulo}%`
            };
        }

        const posts = await database.Posts.findAll({
            where: criterioDeBusca,
            include: [
                {
                    model: database.Usuario,
                    where: usuario ? { usuario: { [Op.like]: `%${usuario}%` } } : {},
                    attributes: [] 
                }
            ]
        });

        
        return res.status(200).json(posts);
    } catch (err) {
        return res.status(500).json(err.message);
    }
  }
}



  module.exports = PostController;