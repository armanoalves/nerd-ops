const { Router } = require("express");
const PostController = require("../controllers/PostController");
const authenticateToken = require("../utils/authMiddleware")
 
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Operações relacionadas a posts
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retorna todos os posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Lista de posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Posts'
 */

router.get("/posts", authenticateToken ,PostController.lerPosts);

/**
 * @swagger
 * /posts:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Cria um novo post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Posts'
 *     responses:
 *       201:
 *         description: Post criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Posts'
 */

 router.post("/posts", authenticateToken, PostController.criarPost);


 
 /**
 * @swagger
 * /posts/{id}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Atualiza um post existente
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do post a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Posts'
 *     responses:
 *       200:
 *         description: Post atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Posts'
 */
 router.put("/posts/:id", authenticateToken, PostController.atualizarPost);



 /**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Deleta um post existente
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do post a ser deletado
 *     responses:
 *       200:
 *         description: Post deletado com sucesso
 */
 router.delete("/posts/:id", authenticateToken, PostController.apagarPost);

module.exports = router;