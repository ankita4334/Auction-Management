import User from "../models/user-model.js";
export const register=async(req,res)=>{
    try {

        const{username,email,password}=req.body;

        const userExist=await User.findOne({email:email})

        if(userExist)
        {
            return res.status(400).json({msg:"email already exist"});    
        }

        const userCreate=await User.create({username,email,password});
        return res.status(400).json({msg:"register success"},userCreate);  
        
    } catch (error) {
         console.log(error)
    }
}

export default register;