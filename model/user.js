const mongoose = require('mongodb')
const Schema  = mongoose.Schema

const userSchema = new Schema ({
    name:{
        type: String,
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    address:{
        type: String,
    },
    phone:{
        type: Number,
        unique: true
    },
    CreateAt:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('users', userSchema)