const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    uname:String,
    email:String,
    mno:String,
    password:String,
    cpassword:String
})

const usermodel=mongoose.model('user',userSchema)
module.exports=usermodel