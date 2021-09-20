const Request = require('../models/Request')
const Carrier = require('../models/Carrier')
const errorHandler = require('../utils/errorHandler')
const chara  = require('../bussinesLogic/chara')
const { substDensity } = require('../bussinesLogic/chara')
const e = require('express')
const { getByUserId } = require('./carrier')

module.exports.createRequest = async function(req, res){
    try {
        const request = await new Request({
            userId: req.user.id,
            operatorId: req.user.id,
            info: req.body.info,
            weight: req.body.weight
        }).save();
        res.status(201).json(request);
    } catch (e){
        errorHandler(res, e)
    }
}
module.exports.acceptRequest = async function(req, res){
    try {
        const carrier = await new Carrier({
            userId: req.user.id,
            operatorId: req.user.id,
            info: req.body.info,
            location: req.body.location,
            temperature: req.body.temperature,
            humidity: req.body.humidity,
            tiltX: req.body.tiltX,
            tiltY: req.body.tiltY
        }).save();
        res.status(201).json(carrier);
        res.status(200).json({ message:"Успішно прийнято" });
    } catch (e){
        errorHandler(res, e)
    }
}
module.exports.deleteRequest = async function(req, res){
    try {
        await  Request.remove({_id: req.params.id})
        res.status(200).json({ message:"Видалено" });
    } catch (e){
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res){
    try {
        const request = await Request.findOne(
            {_id: req.params.id}
            );
        res.status(201).json(request);
    } catch (e){
        errorHandler(res, e)
    }
}

module.exports.getByUserId = async function(req, res){
    try {
        const request = await Request.find({
            userId: req.user.id
        })
        res.status(201).json(request);
    } catch (e){
        errorHandler(res, e)
    }
}

module.exports.getByOperatorId = async function(req, res){
    try {
        const request = await Request.find({
            operatorId: req.body.operatorId
        })
        res.status(201).json(request);
    } catch (e){
        errorHandler(res, e)
    }
}