const express = require("express")
const authMiddleware = require("../middleware/session")
const { createItem, addActivity, lessActivity, getItems, getForCommunity, getActivity } = require("../controllers/activities")
const { validatorCreate, validatorId } = require("../validators/activities")
const router = express.Router()

//crear
router.post("/createItem", authMiddleware, validatorCreate, createItem)

//unirse
router.put("/add", authMiddleware, validatorId, addActivity)

//confirmar a actividad
//router.post("/confirm", )

//salirse
router.put("/less", authMiddleware, validatorId, lessActivity)

//pedir acts
router.get("/getItems", authMiddleware, getItems)

//pedir acts de comunity
router.get("/getCommunity/:id", authMiddleware, validatorId, getForCommunity)

//pedir info
router.get("/getActivity/:id", authMiddleware, validatorId, getActivity)

//añadir a calendario


module.exports = router