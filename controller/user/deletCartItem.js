const Cart = require("../../Models/cart")


const deleteItem = async (req,res)=>{
    const{id} = req.params
    try{
        await Cart.findByIdAndDelete({_id:id})
        res.status(200).send({message: "Item deleted"})
    }catch{
        res.status(500).json({message: "Something went wrong"})
    }
}

module.exports = deleteItem