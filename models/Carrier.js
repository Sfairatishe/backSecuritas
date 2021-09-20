const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carrierSchema = new Schema({
    
    operatorId:{
        ref: 'operators',
        type: Schema.Types.ObjectId,
        required: true 
    },
    userId:{
        ref: 'users',
        type: Schema.Types.ObjectId,
        required: true
    },
    info:{
        type: String,
        required:false
    },
    location:{
        type: String,
        required:false
    },
    temperature : {
        type: Number,
        required: false
    },
    humidity : {
        type: Number,
        required: false
    },
    tiltX : {
        type: Number,
        required: false
    },
    tiltY : {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('carriers', carrierSchema)