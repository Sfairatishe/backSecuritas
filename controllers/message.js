const Message = require('../models/Message')
const errorHandler = require('../utils/errorHandler')
const chara  = require('../bussinesLogic/chara')
const { substDensity } = require('../bussinesLogic/chara')
const e = require('express')
const { getByUserId } = require('./carrier')

module.exports.createNewMessage = async function(req, res){
    try {
        const message = await new Message({
            senderName: req.user.username,
            receiverName: req.body.receiverName,
            theme: req.body.theme,
            text: req.body.text
        }).save();
        res.status(201).json(message);
    } catch (e){
        errorHandler(res, e)
    }
}

module.exports.deleteMessage = async function(req, res){
    try {
        await  Message.remove({_id: req.params.id})
        res.status(200).json({ message:"Видалено" });
    } catch (e){
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res){
    try {
        const message = await Message.findOne(
            {_id: req.params.id}
            );
        res.status(201).json(message);
    } catch (e){
        errorHandler(res, e)
    }
}

module.exports.getBySenderName = async function(req, res){
    try {
        const message = await Message.find({
            senderName : req.user.username
        })
        res.status(201).json(message);
    } catch (e){
        errorHandler(res, e)
    }
}

module.exports.getByRecieverName = async function(req, res){
    try {
        const message = await Message.find({
            receiverName: req.user.username
        })
        res.status(201).json(message);
    } catch (e){
        errorHandler(res, e)
    }
}