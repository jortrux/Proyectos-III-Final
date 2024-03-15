const { matchedData } = require("express-validator")
const {communityModel, usersModel, activityModel, forumModel} = require("../models")
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

const leaveCommunity = async (req, res) => {
    try {
        const user = req.user
        const {id} = matchedData(req)

        await Communities.findByIdAndUpdate(id, { $pull: {members: user._id}}, {new: true});

        await usersModel.findByIdAndUpdate(user._id, { $pull: {communities: {id}}}, {new: true});

        res.status(200).send()
    }catch (err){
        handleHttpError(res, 'ERROR_leave_COMMUNITY')
    }
}

const searcher = async (req, res) => {
    try {
        req = matchedData(req)
        var students = []
        var professor = []
        var communities = []
        var activity = []
        var forum = []

        if(!(req.students && req.professor && req.communities && req.activity && req.forum)){
            req.student = true
            req.professor = true
            req.community = true
            req.activity = true
            req.forum = true
        }
        
        if(req.student){
            students = await usersModel.find({
                role: "alumno",
                $or: [
                    { name: { $regex: new RegExp(req.search, 'i') } },
                    { firstSurname: { $regex: new RegExp(req.search, 'i') } },
                    { secondSurname: { $regex: new RegExp(req.search, 'i') } },
                ]
            })
        }
        if(req.professor){
            professor = await usersModel.find({
                role: "profesor",
                $or: [
                    { name: { $regex: new RegExp(req.search, 'i') } },
                    { firstSurname: { $regex: new RegExp(req.search, 'i') } },
                    { secondSurname: { $regex: new RegExp(req.search, 'i') } },
                ]
            })
        }
        if(req.communities){
            communities = await communityModel.find({
                $or: [
                    { name: { $regex: new RegExp(req.search, 'i') } },
                    { description: { $regex: new RegExp(req.search, 'i') } },
                    { topics: { $elemMatch: { $regex: new RegExp(req.search, 'i') } } },
                ]
            })
        }
        if(req.activity){
            activity = await activityModel.find({
                $or: [
                    { title: { $regex: new RegExp(req.search, 'i') } },
                    { description: { $regex: new RegExp(req.search, 'i') } },
                    { type: { $regex: new RegExp(req.search, 'i') } },
                ]
            })
        }
        if(req.forum){
            forum = await forumModel.find({
                $or: [
                    { title: { $regex: new RegExp(req.search, 'i') } },
                    { description: { $regex: new RegExp(req.search, 'i') } },
                ]
            })
        }
        const data = {
            students: students,
            professor: professor,
            communities: communities,
            activity: activity,
            forum: forum
        }
        
        res.send(data)

    }catch (err){
        handleHttpError(res, 'ERROR_SEARCHER')
    }
}

module.exports = { getCommunities, getUserCommunities, getCommunity, createCommunity, updateCommunity, deleteCommunity, 
    joinCommunity, leaveCommunity, searcher };
