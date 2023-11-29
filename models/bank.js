const mongoose = require("mongoose")
const bankSchema = mongoose.Schema({
    bank_name: {
        type:String,
        required:true,
        match:/^[a-zA-Z]+$/
    },
    bank_account: String, 
    bank_balance: {
        type:Number,
        min:1,
        max:5000
    }
    })
module.exports = mongoose.model("bank",
bankSchema)