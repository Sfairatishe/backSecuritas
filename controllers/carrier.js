const Carrier = require('../models/Carrier')
const errorHandler = require('../utils/errorHandler')
const chara  = require('../bussinesLogic/chara')
const { substDensity } = require('../bussinesLogic/chara')
const e = require('express')
module.exports.getByOperatorId = async function(req, res) {
    try {
        const carrier = await Carrier.find({
            operatorId: req.user.id
        })
        res.status(200).json(carrier)
    } catch (e){
        errorHandler(res, e)
    }
}
module.exports.recalcCarrier = async function (req, res){
    try {
        const carrier = await Carrier.findOne({
            _id: req.params.id
        })
        let bulkDensity = chara.getBulkDensity(carrier.weight, carrier.volume)
        let porousness = chara.getPorousness(carrier.volume,carrier.volumeOfSpace)
        let bulkMass = chara.getbulkMass(carrier.porousness, carrier.porosity, carrier.substDensity)
        let humidity = chara.getHumidity(carrier.weight, carrier.moisture)
        let bulkMassChanges = chara.getBulkMassChanges(carrier.bulkMass, carrier.moisture, carrier.newMoisture)
        const newCarrier = await Carrier.findOneAndUpdate(
            
            {_id: req.params.id},
            {   substDensity: bulkDensity,
                porousness: porousness,
                bulkMass: bulkMass,
                humidity: humidity,
                bulkMassChanges: bulkMassChanges },
            {new:true}
        );

        res.status(200).json(newCarrier);
    } catch (e){
        errorHandler(res, e)
    }
}

module.exports.getByUserId = async function(req, res) {
    try {
        const carrier = await Carrier.find({
            userId: req.user.id
        })
        res.status(200).json(carrier)
    } catch (e){
        errorHandler(res, e)
    }
}

module.exports.createNewCarrier = async function(req, res) {
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
    } catch (e){
        errorHandler(res, e)
    }
} 

module.exports.deleteCarrier = async function(req, res) {
    try {
        await  Carrier.remove({_id: req.params.id})
        res.status(200).json({ message:"Видалено" });
    } catch (e){
        errorHandler(res, e)
    }
}

module.exports.updateCarrier = async function(req, res) {
    try {
        const carrier = await Carrier.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new:true}
            );

        res.status(200).json(carrier);
    } catch (e){
        errorHandler(res, e)
    }
}
module.exports.getById = async function(req, res) {
    try {
        const carrier = await Carrier.findOne(
            {_id: req.params.id}
            );
        res.status(200).json(carrier);
    } catch (e){
        errorHandler(res, e)
    }
}
module.exports.getAllCarriers = async function(req, res) {
    try {
        const carriers = await Carrier.find({userId:req.user.id});
    
        res.status(200).json(carriers);
    } catch (e){
        errorHandler(res, e)
    }
}