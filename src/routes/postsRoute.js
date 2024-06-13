const { Router } = require("express");
const PostController = require("../controllers/PostController");
 
const router = Router();
router
 .get("/posts", PostController.lerPosts)
 .post("/posts", PostController.criarPost)
 .put("/posts/:id", PostController.atualizarPost)
 .delete("/posts/:id", PostController.apagarPost)

module.exports = router;