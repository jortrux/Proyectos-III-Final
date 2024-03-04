const express = require("express")
const {authMiddleware} = require("../middleware/session")
const {getInfo, changeInfo, changePassword} = require("../controllers/user")
const {validatorChange, validatorPassword} = require(../validators/user)
const router = express.Router()

router.get("/info", authMiddleware, getInfo)

router.post("/change", authMiddleware, validatorChange, changeInfo)

router.post("/password", authMiddleware, validatorPassword, changePassword)

module.exports = router
