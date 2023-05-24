const Product = require("../../Models/Product")


const addProduct = (req, res) => {
    const { name,
        images,
        categorie,
        productType,
        brand,
        color,
        rating,
        oldPrice,
        NewPrice,
        size,
        productFeature,
        description,
        material,Stock,warrenty,gender } = req.body

    try {
        const product = new Product({
            name: name ,
            categorie: categorie ,
            description:description ,
            Newprice:NewPrice ,
            Oldprice: oldPrice, 
            image:images ,
            Stock:Stock ,
            productType:productType ,
            brand:brand ,
            gender:gender ,
            color:color ,
            rating:rating ,
            size:size ,
            material:material ,
            productFeatures: productFeature,
            warrenty:warrenty
        })
        product.save()
        res.status(200).send({ mess: "product added",product })
    } catch {
        res.status(401).send({ mess: "server error" })
    }
}

module.exports = addProduct
