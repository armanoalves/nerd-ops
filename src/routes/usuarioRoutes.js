const { Router } = require("express");

const PessoaController = require("../controllers/usuarioController");
const authenticateToken = require("../service/authMiddleware");

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Operações relacionadas a usuários
 */

/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
router.get("/usuario", PessoaController.buscaTodosUsuarios);

/**
 * @swagger
 * /protected:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Obter dados protegidos
 *     responses:
 *       200:
 *         description: Resposta bem-sucedida
 *       401:
 *         description: Não autorizado
 *       403:
 *         description: Proibido
 */
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Esses são dados protegidos.' });
  });

/**
 * @swagger
 * /usuario/{id}:
 *   put:
 *     summary: Atualiza um usuário existente
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
router.put("/usuario/:id", PessoaController.atualizarUsuario);

/**
 * @swagger
 * /usuario/{id}:
 *   delete:
 *     summary: Deleta um usuário existente
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário a ser deletado
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 */
router.delete("/usuario/:id", PessoaController.deletarUsuario);

module.exports = router;
