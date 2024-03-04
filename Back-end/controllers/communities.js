const { matchedData } = require("express-validator")
const {Communities} = require("../models")
const { handleHttpError } = require("../utils/handleError")

const getCommunities = async (req, res) => {
    try{
        const data = await Communities.find({})
        res.send(data)
    }catch(err){
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }
}

const getUserCommunities = async (req, res) => {
    try {
        const userId = req.user._id; 
        const communities = await Communities.find({ members: userId });
        res.send({ communities });
    } catch (err) {
        handleHttpError(res, 'ERROR_GET_ITEMS');
    }
};


const getCommunity = async (req, res) => {
    try{
        const {id} = matchedData(req) 
        const data = await Communities.findById(id)
        res.send(data)
    } catch(err){
        handleHttpError(res, "ERROR_GET_ITEM")
    }
}


const createCommunity = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await Communities.create(body);
        res.send(data)    
    }catch(err){
        handleHttpError(res, 'ERROR_CREATE_ITEMS')
    }
}


const updateCommunity = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const data = await Communities.findByIdAndUpdate(id, body);
        res.send(data)    
    }catch(err){
        handleHttpError(res, 'ERROR_UPDATE_ITEMS')
    }
}

const deleteCommunity = async (req, res) => {
    try {
        const {id} = matchedData(req)
        const data = await Communities.delete({_id:id});
        res.send(data)    
    }catch(err){
        handleHttpError(res, 'ERROR_DELETE_ITEM')
    }
}


module.exports = { getCommunities, getUserCommunities, getCommunity, createCommunity, updateCommunity, deleteCommunity };