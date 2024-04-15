const { matchedData } = require("express-validator")
const {handleHttpError} = require("../utils/handleError")
const { activityModel, usersModel } = require("../models")



const createItem = async (req, res) => {
    try {
        const user = req.user
        req = matchedData(req)

        req.createdBy = user._id
        req.createdAt = Date.now()
        //crear foro asociado
        //notificar a los usuarios requeridos

        await activityModel.create(body)
        

        res.status(200).send()  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_CREATE_ACTIVITY")
    }
}

const addActivity = async (req, res) => {
    try {
        const user = req.user
        req = matchedData(req)

        const updatedActivity = await activityModel.findByIdAndUpdate(
            req.id,
            {
                $addToSet: {
                    optionalParticipants: {
                        $each: [{
                            userId: user._id,
                            confirmed: true
                        }],
                        $ne: { userId: user._id }
                    }
                }
            },
            { new: true }
        )

        const updatedUser = await usersModel.findByIdAndUpdate(
            user._id,
            {
                $addToSet: {
                    enrolledActivities: {
                        $each: [{
                            activityId: req._id
                        }],
                        $ne: { activityId: req._id }
                    }
                }
            },
            { new: true }
        )

        

        res.status(200).send()  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_ADD_ACTIVITY")
    }
}

const lessActivity = async (req, res) => {
    try {
        const user = req.user
        req = matchedData(req)

        const updatedActivity = await activityModel.findByIdAndUpdate(
            req.id,
            {
                $pull: {
                    optionalParticipants: {
                        userId: user._id,
                        confirmed: true
                    }
                }
            },
            { new: true }
        )

        const updatedUser = await usersModel.findByIdAndUpdate(
            user._id,
            {
                $pull: {
                    enrolledActivities: {
                        activityId: req._id
                    }
                }
            },
            { new: true }
        )
        

        res.status(200).send()  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_LESS_ACTIVITY")
    }
}

const getItems = async (req, res) => {
    try {
        req = matchedData(req)

        const activities = await activityModel.find({ active: true })

        res.status(200).send(activities)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_GET_ACTIVITIES")
    }
}

const getForCommunity = async (req, res) => {
    try {
        req = matchedData(req)

        const activities = await activityModel.find({ community: req.id })
        
        res.status(200).send(activities)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_GET_ACTIVITIES")
    }
}

const getActivity = async (req, res) => {
    try {
        req = matchedData(req)

        const activity = await activityModel.findOne({ _id: req.id })
        

        res.status(200).send(activity)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_GET_ACTIVITY")
    }
}


module.exports = { createItem, addActivity, lessActivity, getItems, getForCommunity, getActivity }
