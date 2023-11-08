const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    contenido:{
        type: String,
        required: true
    },
    remitente:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    destinatario:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    fecha:{
        type: Date,
        default: Date.now()
    }
})

const conversationSchema = new mongoose.Schema({
    participants:[{type: mongoose.SchemaTypes.ObjectId, ref:"User"}],
    messages:[chatSchema]
})


module.exports = mongoose.model("Chat",conversationSchema)