const express = require("express")
const {authMiddleware} = require("../middleware/session")
const {getCommunities, getUserCommunities, getCommunity, createCommunity, deleteCommunity, updateCommunity} = require("../controllers/user")
const {validatorCreateComunity, validatorGetComunity} = require("../validators/communities")
const router = express.Router()

/* TODO
Unirte a comunidad 
Salir de una comunidad
*/


router.get("/getItems", authMiddleware, getCommunities)

router.get("/getItem/:id", authMiddleware, validatorGetComunity, getCommunity)

router.get("/user", authMiddleware, getUserCommunities)

router.post("/createItem", authMiddleware, validatorCreateComunity, createCommunity)

router.delete("/deleteItem/:id", authMiddleware, validatorGetComunity, deleteCommunity);

router.put("/updateItem/:id", authMiddleware, validatorGetComunity, validatorCreateComunity, updateCommunity)

module.exports = router
