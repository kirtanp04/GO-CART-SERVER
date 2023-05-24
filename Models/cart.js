const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    UserID:{type:String,required:true},
    productID:{type:String,required:true},
    productName:{type:String,required:true},
    Image:{type:String,required:true},
    Price:{type:String,required:true},
    Size:{type:String},
    Quantity:{type:String,required:true},
    totalPrice:{type:String,required:true}
})

const Cart = mongoose.model('Cart', userSchema)

module.exports = Cart