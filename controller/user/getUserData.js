const jwt = require("jsonwebtoken")
const User = require("../../Models/User")
const getUserData = async(req,res)=>{
    const {token} = req.params
    try{
        const checkToken = jwt.verify(token,process.env.JWT_SECRET)
        if(checkToken){
            const user = await User.findById({_id: checkToken.id})
        res.status(200).send(user)
        }

    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports = getUserData