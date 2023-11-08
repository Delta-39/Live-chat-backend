const mongoose = require("mongoose")

const sessionSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.SchemaTypes.ObjectId, 
        ref:"User"
    },
    token:{
        type:String, 
        required:true
    },
    expiratiuon:{
        type:Date, 
        required:true
    }
})

module.exports = mongoose.model("Session", sessionSchema)