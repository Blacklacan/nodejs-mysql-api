const express = require("express")
const router = express.Router()

const workflowsController = require("../controller/posts.controller")

router.get("/", workflowsController.getAll)
router.get("/:id", workflowsController.getById)
router.post("/", workflowsController.create)
router.put("/:id", workflowsController.update)
router.delete("/:id", workflowsController.delete)

module.exports = router
