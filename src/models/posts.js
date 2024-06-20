'use strict';
const {
  Model
} = require('sequelize');

 /**
   * @swagger
   * components:
   *   schemas:
   *     Posts:
   *       type: object
   *       required:
   *         - titulo
   *         - descricao
   *         - usuario_id
   *       properties:
   *         id:
   *           type: integer
   *           description: ID do post
   *         titulo:
   *           type: string
   *           description: Título do post
   *         descricao:
   *           type: string
   *           description: Descrição do post
   *         usuario_id:
   *           type: integer
   *           description: ID do usuário que criou o post
   */

 
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
      Posts.hasMany(models.Comentario, { foreignKey: 'post_id' });
    }
  }
  Posts.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};