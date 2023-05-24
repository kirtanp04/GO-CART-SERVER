const Product = require("../../Models/Product")

const getData = async(req,res)=>{
    const{name} = req.params

    try{
        const data = await Product.findOne({name:name})
        res.status(200).send(data)
    }catch{
        res.status(400).send(error)
    }
}

module.exports = getData