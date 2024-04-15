const { matchedData } = require("express-validator")
const { forumModel, postModel } = require("../models")
const { handleHttpError } = require("../utils/handleError")


const createForum = async (req, res) => {
    try{
        var user = req.user
        req = matchedData(req)

        req.createdBy = user._id
        req.createdAt = Date.now()

        const data = await forumModel.create(req)
        res.send(data)
    }catch(err){
        handleHttpError(res, 'ERROR_CREATE_ITEM')
    }
}

const reply = async (req, res) => {
    try{ //Notificar de respuesta al usuario
        var user = req.user
        req = matchedData(req)

        req.createdBy = user._id
        req.createdAt = Date.now()

        const data = await postModel.create(req)
        res.send(data)
    }catch(err){
        handleHttpError(res, 'ERROR_CREATE_REPLY')
    }
}

const getReplys = async (req, res) => {
    try{
        req = matchedData(req)

        var data = await postModel.find({parent: req._id, delete: false})

        res.send(data)
    }catch(err){
        handleHttpError(res, 'ERROR_CREATE_REPLY')
    }
}

const deletePost = async (req, res) => {
    try{
        const user = req.user
        req = matchedData(req)

        if(user.role == "sysadmin"){
            await postModel.findByIdAndUpdate(req._id, { delete: true })
        }
        else {
            const post = postModel.findById(req._id)
            if(post.createdBy === user._id){
                await postModel.findByIdAndUpdate(post._id, { delete: true })
            }
            else {
                handleHttpError(res, "ERROR_NOT_YOUR_POST", 404)
                return
            }
        }

        res.status(200).send()
    }catch(err){
        handleHttpError(res, 'ERROR_DELETE_POST')
    }
}

const reportPost = async (req, res) => {
    try{
        const user = req.user
        req = matchedData(req)
        const {_id, rest} = req
        rest.complainant = user._id

        const post = await postModel.findByIdAndUpdate(_id, { $addToSet: {reports: rest}}, {new: true})

        if(post.reports.length > 10){
            //enviar email y notificacion al admin
        }

        res.status(200).send()
    }catch(err){
        handleHttpError(res, 'ERROR_REPORT_POST')
    }
}

module.exports = { createForum, reply, getReplys, deletePost, reportPost };
