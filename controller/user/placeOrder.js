const jwt = require("jsonwebtoken")
const User = require("../../Models/User")
const placedOrder = require("../../Models/PlacedOrder")

const placeOrder = async (req, res) => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear()

    const { token } = req.params
    const { fname,
        lname,
        email,
        phone,
        address,
        city,
        zip,
        house,
        pinCode,
        mess,
        cart,
        total } = req.body

    try {
        const checkToken = await jwt.verify(token, process.env.JWT_SECRET)
        if (!checkToken) {
            return res.status(401).json({ message: "Unauthorized" })
        } else {

            const user = await User.findOne({ _id: checkToken.id })
            const oredr = new placedOrder({
                userID:user._id ,
                placedDate:day + "/" + month + "/" + year,
                fName:fname ,
                lName:lname ,
                email:email ,
                address:address ,
                city:city ,
                phone:phone ,
                zip:zip ,
                house:house ,
                postCode:pinCode ,
                message: mess,
                product: cart,
                totalPrice: total
            })
            await oredr.save()

            res.status(201).send({ message: "Order Placed Successfully" })
        }

    } catch {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = placeOrder