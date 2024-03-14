const { matchedData } = require("express-validator")
const {communityModel, usersModel} = require("../models")
const { handleHttpError } = require("../utils/handleError")


const getCommunities = async (req, res) => {
    try{
        const data = await communityModel.find({})
        res.send(data)
    }catch(err){
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }
}

const getUserCommunities = async (req, res) => {
    try {
        const ids = req.user.communities;
        const communities = await communityModel.find({ids}).select("name description avatar");
        res.send(communities);
    } catch (err) {
        handleHttpError(res, 'ERROR_GET_ITEMS');
    }
};


const getCommunity = async (req, res) => {
    try{
        const {id} = matchedData(req) 
        const data = await communityModel.findById(id)
        res.send(data)
    } catch(err){
        handleHttpError(res, "ERROR_GET_ITEM")
    }
}


const createCommunity = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await communityModel.create(body);
        res.send(data)    
    }catch(err){
        handleHttpError(res, 'ERROR_CREATE_ITEMS')
    }
}


const updateCommunity = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const data = await communityModel.findByIdAndUpdate(id, body);
        res.send(data)    
    }catch(err){
        handleHttpError(res, 'ERROR_UPDATE_ITEMS')
    }
}

const deleteCommunity = async (req, res) => {
    try {
        const {id} = matchedData(req)
        const data = await communityModel.delete({_id:id});
        res.send(data)    
    }catch(err){
        handleHttpError(res, 'ERROR_DELETE_ITEM')
    }
}

const joinCommunity = async (req, res) => {
    try {
        const {userId, communityId} = req.body

        const updatedCommunity = await communityModel.findByIdAndUpdate(communityId, { $addToSet: {members: userId}}, {new: true});

        const updatedUser = await usersModel.findByIdAndUpdate(userId, { $addToSet: {communities: {communityId}}}, {new: true});

        res.status(200).send()
    }catch (err){
        handleHttpError(res, 'ERROR_JOIN_COMMUNITY')
    }
}

const leaveCommunity = async (req, reas) => {
    try {
        const {userId, communityId} = req.body

        const updatedCommunity = await Communities.findByIdAndUpdate(communityId, { $pull: {members: userId}}, {new: true});

        const updatedUser = await usersModel.findByIdAndUpdate(userId, { $pull: {communities: {communityId}}}, {new: true});

        res.status(200).send()
    }catch (err){
        handleHttpError(res, 'ERROR_leave_COMMUNITY')
    }
}

module.exports = { getCommunities, getUserCommunities, getCommunity, createCommunity, updateCommunity, deleteCommunity, joinCommunity, leaveCommunity };
