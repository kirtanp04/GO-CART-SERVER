const jwt = require("jsonwebtoken")
const placedOrder = require("../../Models/PlacedOrder")
const Cart = require("../../Models/cart")
const User = require("../../Models/User")

const getAllData = async(req,res)=>{
    const{token} = req.params
    try{
        const checkToken = jwt.verify(token,process.env.JWT_SECRET)
        if(checkToken){
            const userOrder = await placedOrder.find({userID:checkToken.id}).countDocuments()
            const cartCount = await Cart.find({UserID:checkToken.id}).countDocuments()
            const orderData = await placedOrder.find({userID:checkToken.id})
            const user = await User.findOne({_id:checkToken.id})
            // console.log(orderData)

            res.send({userOrder,cartCount,orderData,user})
        }
    }catch{
        res.status(400).send("error")
    }
}

module.exports = getAllData