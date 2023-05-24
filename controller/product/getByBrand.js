const Product = require("../../Models/Product")


const getByBrand = async(req,res)=>{
    const{categorie,product} = req.params
    try{
        const data = await Product.find({categorie:categorie, brand:product})
        res.status(200).send(data)
    }catch{
        res.status(400).send(error)
    }
}

module.exports = getByBrand