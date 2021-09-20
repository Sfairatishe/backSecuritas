const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
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
    weight:{
        type: String,
        required:false
    }
})


module.exports = mongoose.model('requests', requestSchema)