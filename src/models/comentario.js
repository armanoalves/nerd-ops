'use strict';
const {
  Model
} = require('sequelize');

/**
   * @swagger
   * components:
   *   schemas:
   *     Comentario:
   *       type: object
   *       required:
   *         - conteudo
   *         - usuario_id
   *         - post_id
   *       properties:
   *         id:
   *           type: integer
   *           description: ID do comentário
   *         conteudo:
   *           type: string
   *           description: Conteúdo do comentário
   *         usuario_id:
   *           type: integer
   *           description: ID do usuário que fez o comentário
   *         post_id:
   *           type: integer
   *           description: ID do post ao qual o comentário pertence
   */

module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comentario.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
      Comentario.belongsTo(models.Posts, { foreignKey: 'post_id' });
    }
  }
  Comentario.init({
    conteudo: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comentario',
  });
  return Comentario;
};