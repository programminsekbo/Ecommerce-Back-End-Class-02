import { LoginService, VerifyLoginService } from "../service/UserServices.js";






export const Login=async(req,res)=>{
    let result=await LoginService(req)
    return res.json(result);
}







export const VerifyLogin=async(req,res)=>{
    let result=await VerifyLoginService(req)
    return res.json(result);
   
}




export const CreateUserProfile=async(req,res)=>{
   
}

export const UpdateUserProfile=async(req,res)=>{
  
}

export const ReadUserProfile=async(req,res)=>{
  
}
