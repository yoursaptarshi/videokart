const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    users:{
        type:Number,
        default:0
    },
    subscription:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

module.exports = mongoose.model("Stats",schema)