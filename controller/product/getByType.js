const Product = require("../../Models/Product")


const ProductType = async(req,res)=>{
    const{type} = req.params
    try{
        const data = await Product.find({productType:type})
        res.status(200).json(data) 
    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports = ProductType