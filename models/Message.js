const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    receiverName:{
        type: String,
        required:true
    },
    senderName:{
        type: String,
        required:false
    },
    theme:{
        type: String,
        required:false
    },
    text:{
        type: String,
        required:false
    }
})


module.exports = mongoose.model('messages', messageSchema)