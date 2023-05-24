const jwt = require("jsonwebtoken")
const User = require("../../Models/User")
const Product = require("../../Models/Product")
const Cart = require("../../Models/cart")

const addToCart = async (req, res) => {
    const { token, id } = req.params
    const { selectedQuantity, selectedSize } = req.body
    try {
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById({ _id: verifyToken.id })
        const product = await Product.findOne({ _id: id })
        // console.log(product)

        const findProduct = await Cart.findOne({productID:product._id,UserID:user._id})
        if(findProduct){
            await Cart.findOneAndUpdate({productID:product._id,UserID:user._id},{
                $set:{
                    Size:selectedSize,
                    Quantity:selectedQuantity,
                    totalPrice:product.Newprice * selectedQuantity
                }
            })
            res.status(200).send({ message: "Product updated" })
            
        }else{
            const newCart = new Cart({
                UserID:user._id,
                productID:product._id,
                productName:product.name,
                Image:product.image[0],
                Price:product.Newprice,
                Size:selectedSize,
                Quantity:selectedQuantity,
                totalPrice:product.Newprice * selectedQuantity
            })
            await newCart.save()
            res.status(200).send({ message: "Product added to cart" })
            
        }


    } catch {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = addToCart