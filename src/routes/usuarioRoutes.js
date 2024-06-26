const { Router } = require("express");

const UsuarioController = require("../controllers/usuarioController");
const authenticateToken = require("../utils/authMiddleware");

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
 *     security:
 *       - bearerAuth: []
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
router.get("/usuario", authenticateToken, UsuarioController.buscaTodosUsuarios);

/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Usu�rio criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Erro na cria��o do usu�rio
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post("/usuario", UsuarioController.registrar);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza o login do usuário
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Credenciais inv�lidas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post("/login", UsuarioController.login);



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
 *     security:
 *       - bearerAuth: []
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
router.put("/usuario/:id", authenticateToken, UsuarioController.atualizarUsuario);

/**
 * @swagger
 * /usuario/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
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
router.delete("/usuario/:id", authenticateToken, UsuarioController.deletarUsuario);

module.exports = router;
