const Product = require("../../Models/Product");


const productCategories = async(req,res)=>{
    const{categories} = req.params;
    try{
        const data = await Product.find({categorie:categories})
        res.status(200).json({mess:"seccuss",data})
    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports =    productCategories
