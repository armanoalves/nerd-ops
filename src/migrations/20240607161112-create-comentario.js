'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comentarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      conteudo: {
        type: Sequelize.STRING
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios', 
          key: 'id'
        },
      },
      post_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Posts', 
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comentarios');
  }
};