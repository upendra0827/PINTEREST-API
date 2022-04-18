const { Router } = require("express")
const controller = require('./controller')

const router = Router()

router.get("/posts", controller.getPinterest)
router.post("/posts", controller.addPinterest)
router.get("/posts/:id", controller.getPinterestById)
router.put("/posts/:id", controller.updatePinterest)
router.delete("/posts/:id", controller.removePinterest)
router.get("/users", controller.getUsers)
router.get("/users/:id", controller.getUserById)
router.delete("/users/:id", controller.removeUserById)
router.get("/posts/:id/comments", controller.getCommentById)
router.post("/posts/:id/comments", controller.addPinterest)

module.exports = router