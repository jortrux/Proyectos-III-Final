const express = require("express")
const { registerCtrl, loginCtrl, codeVerification, newPassword, passwordCode, passwordEmail } = require("../controllers/auth")
const { validatorRegister, validatorLogin, validatorCode, validatorPassword, validatorCode2, validatorEmail } = require("../validators/auth")
const router = express.Router()

router.post("/login", validatorLogin, loginCtrl)

router.post("/register", validatorRegister, registerCtrl)

router.post("/code", validatorCode, codeVerification)

router.post("/password/password", validatorPassword, newPassword)

router.post("/password/code", validatorCode2, passwordCode)

router.post("/password/email", validatorEmail, passwordEmail)

module.exports = router
