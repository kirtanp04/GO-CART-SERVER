const User = require("../../Models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const Login = async(req,res)=>{
    const{email,password} = req.body
    try{
        const checkEmail = await User.findOne({ Email: email})
        // console.log(checkEmail)
        if(!checkEmail){
            return res.json({message:"Create Account"})
        }
        const checkPassword = await bcrypt.compare(password,checkEmail.Password)
        // console.log(checkPassword)
        if(!checkPassword){
            return res.json({message:"Wrong Password"})
        }
        const token = jwt.sign({id:checkEmail._id},process.env.JWT_SECRET,{expiresIn:"5h"})
        res.status(200).json({mess:"success",token})
    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports = Login