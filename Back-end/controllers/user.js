const { matchedData } = require("express-validator")
const { encrypt } = require("../utils/handlePassword")
const {handleHttpError} = require("../utils/handleError")
const {usersModel, tokenModel} = require("../models")


const getInfo = async (req, res) => {
    try {

       var user = req.user
       user = {...user, password, email, passwordRecovery, recoveryCode, registered, allowRemainders, favForums, enrolledActivities, communities, posts}
       res.send(user)
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_GET_INFO")
    }
}

const changeInfo = async (req, res) => {
    try {

       const user = req.user
       req = matchedData(req)
       await usersModel.updateOne({ _id: user._id }, { $set: req })
       data = req
       res.send(data)
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_GET_INFO")
    }
}

const changePassword = async (req, res) => {
    try {

       const user = req.user
       req = matchedData(req)
       const password = await encrypt(req.password)
       await usersModel.updateOne({ _id: user._id }, {$set: {password: password }})
       await tokenModel.deleteMany({ email: user.email })
       data = req
       res.status(200).send()

    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_GET_INFO")
    }
}

const updatePhoto = async (req, res) => {
    try {
        const { body, file } = req
        const user = req.user
        const avatar = { 
            filename: file.filename,
            url: process.env.PUBLIC_URL+"/"+file.filename
        }

        await usersModel.updateOne({ _id: user._id }, {$set: {avatar: avatar }})

        res.status(200).send()
    }catch(err) {
        handleHttpError(res, "ERROR_DETAIL_ITEM")
    }
}

module.exports = { getInfo, changeInfo, changePassword, updatePhoto }