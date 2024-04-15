const express = require("express")
const authMiddleware = require("../middleware/session")
const { createForum, reply, getReplys, deletePost, reportPost } = require("../controllers/forum")
const { validatorCreate, validatorReply, validatorId, validatorReport } = require("../validators/forum")
const router = express.Router()

//crear foro
router.post("/createItem", authMiddleware, validatorCreate, createForum)
//contestar
router.post("/reply", authMiddleware, validatorReply, reply)
//pedir hijos
router.get("/getReplys/:_id", authMiddleware, validatorId, getReplys)
//eliminar comentario
router.delete("/deleteItem", authMiddleware, validatorId, deletePost)
//denunciar mensaje
router.post("/report", authMiddleware, validatorReport, reportPost)

module.exports = router
