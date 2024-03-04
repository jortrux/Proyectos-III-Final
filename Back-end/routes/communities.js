const express = require("express")
const {authMiddleware} = require("../middleware/session")
const {getCommunities, getUserCommunities, getCommunity, createCommunity, deleteCommunity, updateCommunity} = require("../controllers/user")
const {validatorCreateComunity, validatorGetComunity} = require("../validators/communities")
const router = express.Router()

/* TODO
Unirte a comunidad 
Salir de una comunidad
*/


router.get("/communities", authMiddleware, getCommunities)

router.get("/communities/:id", authMiddleware, validatorGetComunity, getCommunity)

router.get("/communities/user", authMiddleware, getUserCommunities)

router.post("/communities", authMiddleware, validatorCreateComunity, createCommunity)

router.delete("/communities/:id", authMiddleware, validatorGetComunity, deleteCommunity);

router.put("/communities/:id", authMiddleware, validatorGetComunity, validatorCreateComunity, updateCommunity)

module.exports = router