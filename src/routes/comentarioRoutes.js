const { Router } = require("express");

const ComentarioController = require("../controllers/ComentarioController");
 
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

router.get("/comentario", ComentarioController.buscaTodosComentarios);

/**
 * @swagger
 * /comentario:
 *   post:
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

 router.post("/comentario", ComentarioController.criarComentario);
 
 /**
 * @swagger
 * /comentario/{id}:
 *   put:
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
 router.put("/comentario/:id", ComentarioController.atualizarComentario);

 /**
 * @swagger
 * /comentario/{id}:
 *   delete:
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
 router.delete("/comentario/:id", ComentarioController.deletarComentario);
module.exports = router;