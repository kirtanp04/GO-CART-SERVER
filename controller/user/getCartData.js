const Product = require("../../Models/Product")
const Cart = require("../../Models/cart")
const jwt = require("jsonwebtoken")

const getCartData = async(req,res)=>{
    const {token} = req.params

    try{
        const checkToken = jwt.verify(token,process.env.JWT_SECRET)
        const cart = await Cart.find({UserID:checkToken.id})
        res.status(200).send(cart)
    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports = getCartData