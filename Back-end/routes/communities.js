const express = require("express")
const {authMiddleware} = require("../middleware/session")
const {getCommunities, getUserCommunities, getCommunity, createCommunity, deleteCommunity, updateCommunity} = require("../controllers/user")
const {validatorCreateComunity, validatorId } = require("../validators/communities")
const router = express.Router()

/* TODO
Unirte a comunidad 
Salir de una comunidad
*/


router.get("/getItems", authMiddleware, getCommunities)

router.get("/getItem/:id", authMiddleware, validatorId , getCommunity)

router.get("/user", authMiddleware, getUserCommunities)

router.post("/createItem", authMiddleware, validatorCreateComunity, createCommunity)

router.delete("/deleteItem/:id", authMiddleware, validatorId , deleteCommunity);

router.put("/updateItem/:id", authMiddleware, validatorId , validatorCreateComunity, updateCommunity)

module.exports = router
