const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    userID:{type:String},    
    placedDate:{type:String},
    fName:{type:String},
    lName:{type:String},
    email:{type:String},
    address:{type:String},
    city:{type:String},
    phone:{type:String},
    zip:{type:String},
    house:{type:String},
    postCode:{type:String},
    message:{type:String},
    product:[],
    totalPrice:{type:Number}

})

const placedOrder = mongoose.model('orderplaced', orderSchema)

module.exports = placedOrder