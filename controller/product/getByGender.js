const Product = require("../../Models/Product");


const getByGender = async(req,res)=>{
    const {gender,categorie} = req.params;
    try{

        const data = await Product.find({gender:gender,categorie:categorie})
        res.status(200).json(data)
    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
        
}

module.exports =   getByGender
