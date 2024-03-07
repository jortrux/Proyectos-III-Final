const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreateComunity = [
    check("name").exists().notEmpty(),
    check("description").exists().notEmpty(),
    check("createdBy").exists().notEmpty().isMongoId(),
    check("members").exists().notEmpty().isMongoId(),
    check("public").exists().notEmpty(),
    check("topics").exists().notEmpty(),
    check("avatar.filename").exists().notEmpty(),
    check("avatar.url").exists().notEmpty(),
    check("settings.allowPosts").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorId = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]
module.exports = { validatorCreateComunity, validatorId }    
