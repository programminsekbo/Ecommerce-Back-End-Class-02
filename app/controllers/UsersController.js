import { LoginService, VerifyLoginService, CreateProfileService,UpdateProfileService,ReadProfileService, } from "../service/UserServices.js";






export const Login=async(req,res)=>{
    let result=await LoginService(req)
    return res.json(result);
}


export const VerifyLogin=async(req,res)=>{
    let result=await VerifyLoginService(req)
    return res.json(result);
   
}














export const CreateUserProfile=async(req,res)=>{
    let result=await CreateProfileService(req)
    return res.json(result);
}


export const UpdateUserProfile=async(req,res)=>{
    let result=await UpdateProfileService(req)
    return res.json(result);
}

export const ReadUserProfile=async(req,res)=>{
    let result=await ReadProfileService(req)
    return res.json(result);
}
