const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreate = [
    check("title").exists().notEmpty(),
    check("description").exists().notEmpty().isLength( {min:8, max: 200} ),
    check("community").notEmpty(),
    check("type").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorId = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorCreate, validatorId }
