const Product = require("../../Models/Product")

const ProductId = async(req,res)=>{

    const{id} = req.params
    try{
        const data = await Product.findById({_id: id})
        const same = await Product.find({productType:data.productType})
        res.status(200).json({mess:"success",data,same})
    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports =    ProductId
