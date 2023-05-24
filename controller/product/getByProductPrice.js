const Product = require("../../Models/Product")


const productPrice = async(req,res)=>{
    const{min,cat} = req.query
    try{
        const product = await Product.find({categorie:cat})
        const data =  product.filter((val)=>val.Newprice<min)
        res.send(data)
    }catch{
         res.status(500)
    }
}
module.exports = productPrice