const Product = require("../../Models/Product")

const getAllProduct = async(req,res)=>{
    try{
        const product = await Product.find()
        res.status(200).send({mess:"succecc",product})
    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports = getAllProduct