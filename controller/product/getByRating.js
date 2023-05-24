const Product = require("../../Models/Product")

const getByRate = async(req,res)=>{
    const{categorie,rate} = req.params

    try{
        const data = await Product.find({categorie:categorie,rating:rate})
        res.status(201).send(data)
    }catch{
        res.status(400).send(error)
    }
}

module.exports = getByRate