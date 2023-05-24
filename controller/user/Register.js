const User = require("../../Models/User")
const bcrypt = require("bcrypt")


const Register = async(req,res)=>{
    const{name,email,pass,phone,address}=req.body

    try{
        const check = await User.findOne({Email:email})
        if(check){
            return res.status(400).json({message:"User already exists"})
        }
        const hashPass = await bcrypt.hash(pass,10)

        const user = new User({
           Name: name,
           Email: email,
           Password:hashPass,
           Phone:phone,
           Address:address
        })
         user.save()
        res.status(201).json({message:"User Created"})
        

    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports = Register