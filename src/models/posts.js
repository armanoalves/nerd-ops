'use strict';
const {
  Model
} = require('sequelize');
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