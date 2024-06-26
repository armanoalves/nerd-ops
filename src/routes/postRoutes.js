const { Router } = require("express");
const PostController = require("../controllers/PostController");
const authenticateToken = require("../utils/authMiddleware")
 
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: OperaÃ§Ãµes relacionadas a posts
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

/**
 * @swagger
 * /posts/buscar:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Filtra posts com base no título e autor
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: titulo
 *         schema:
 *           type: string
 *         required: false
 *         description: Título do post
 *       - in: query
 *         name: autor
 *         schema:
 *           type: string
 *         required: false
 *         description: Autor do post
 *     responses:
 *       200:
 *         description: Lista de posts filtrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *       400:
 *         description: Erro na filtragem dos posts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
 router.get("/posts/buscar", PostController.buscarPostPorNome);

module.exports = router;