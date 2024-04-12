const express = require("express")
const router = express.Router()

const workflowsController = require("../controller/workflows.controller")

router.get("/", workflowsController.getAll)
router.get("/:id", workflowsController.getById)
router.post("/", workflowsController.create)
router.put("/:id", workflowsController.update)
router.delete("/:id", workflowsController.delete)

module.exports = router
