const jwt = require("jsonwebtoken")
const Cart = require("../../Models/cart")

const UpdateCart = async(req,res)=>{
    const{token,id}= req.params
    const{selectedQuantity} = req.body

    try{
        const checkToken = await jwt.verify(token,process.env.JWT_SECRET)
        const data = await Cart.findOne({_id:id,UserID:checkToken.id})
        if(checkToken){
            await Cart.findOneAndUpdate({_id:id,UserID:checkToken.id},{
                $set:{
                    Quantity:selectedQuantity,
                    totalPrice:data.Price * selectedQuantity
                }
            })
        }
        res.status(200).send({message: "Success"})

    }catch{
        res.status(400).send({message: 'Invalid parameters'})
    }
}

module.exports = UpdateCart