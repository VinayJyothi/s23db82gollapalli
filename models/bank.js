const mongoose = require("mongoose")
const bankSchema = mongoose.Schema({
    bank_name: String,
    bank_account: String, 
    bank_balance: Number
})
module.exports = mongoose.model("bank",
bankSchema)