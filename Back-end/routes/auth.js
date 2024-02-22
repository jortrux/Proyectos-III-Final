const express = require("express")
const { registerCtrl, loginCtrl, codeVerification } = require("../controllers/auth")
const { validatorRegister, validatorLogin, validatorCode } = require("../validators/auth")
const router = express.Router()

router.post("/login", validatorLogin, loginCtrl)

router.post("/register", validatorRegister, registerCtrl)

router.post("/code", validatorCode, codeVerification)

module.exports = router