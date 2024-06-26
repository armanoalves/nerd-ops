const { Router } = require("express");

const ComentarioController = require("../controllers/comentarioController");
const authenticateToken = require("../utils/authMiddleware");
 
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Comentarios
 *   description: Operações relacionadas a comentários
 */

/**
 * @swagger
 * /comentario:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retorna todos os comentários
 *     tags: [Comentarios]
 *     responses:
 *       200:
 *         description: Lista de comentários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comentario'
 */

router.get("/comentario", authenticateToken, ComentarioController.buscaTodosComentarios);

/**
 * @swagger
 * /comentario:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Cria um novo comentário
 *     tags: [Comentarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comentario'
 *     responses:
 *       201:
 *         description: Comentário criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comentario'
 */

 router.post("/comentario", authenticateToken, ComentarioController.criarComentario);
 
 /**
 * @swagger
 * /comentario/{id}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Atualiza um comentário existente
 *     tags: [Comentarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do comentário a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comentario'
 *     responses:
 *       200:
 *         description: Comentário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comentario'
 */
 router.put("/comentario/:id", authenticateToken, ComentarioController.atualizarComentario);

 /**
 * @swagger
 * /comentario/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Deleta um comentário existente
 *     tags: [Comentarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do comentário a ser deletado
 *     responses:
 *       200:
 *         description: Comentário deletado com sucesso
 */
 router.delete("/comentario/:id", authenticateToken, ComentarioController.deletarComentario);
module.exports = router;