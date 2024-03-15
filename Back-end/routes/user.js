const express = require("express")
const authMiddleware = require("../middleware/session")
const uploadMiddleware = require("../utils/handleStorage")
const {getInfo, changeInfo, changePassword, updatePhoto} = require("../controllers/user")
const {validatorChange, validatorPassword} = require("../validators/user")
const router = express.Router()

router.get("/info", authMiddleware, getInfo)

router.post("/change", authMiddleware, validatorChange, changeInfo)

router.post("/password", authMiddleware, validatorPassword, changePassword)

router.post("updatePhoto", authMiddleware, uploadMiddleware.single("image"), updatePhoto)

module.exports = router
