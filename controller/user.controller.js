import { request, response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import User from "../database/association.js";
import  jwt  from "jsonwebtoken";

export const signup = async (request, response, next) => {
    console.log(request.body);
    try {
        const errors = await validationResult(request);
        if (!errors.isEmpty())
          return response.status(400).json({ message: "bed request ", masseges: errors.array() })
        let soltkey = await bcrypt.genSalt(15);
        let encryptedPassword = await bcrypt.hash(request.body.password, soltkey);
        request.body.password = encryptedPassword;
        const user = await User.create(request.body);
        return response.status(200).json({ user: user, status: true });
    }
    catch (err) {
        return response.status(500), json({ message: "Internal server Error" });
    }
} 

export const signin =  async (request,response,next)=>{
    console.log(request.body);
    try{
    let user =  await User.findOne({ raw : true,
          where : {
             email : request.body.email
          }
    })
     if(user){
          let status = await bcrypt.compare(request.body.password, user.password);
          if(status){
         let payload = {subject : user.email}
         let token = jwt.sign(payload, 'dssfdgdfgfsds')
         return response.status(200).json({ token : token ,message : "login succsefull"});
        }
         return response.status(400).json({ message: "bed request" });
    }
     else
      return response.status(400).json({message : "invalid email and password"})
     }
    catch(err){
      console.log(err);
      return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}
export const userRemoveById = async (request, response, next) => {
  console.log(request.params.id);
  try {
    let user = await User.findOne({ raw: true, where: { id: request.params.id } });
    if (!user)
      return response.status(404).json({ err: "Request Resource Not Found", status: false });
    else {
      let status = User.destroy({ raw: true, where: { id: request.params.id } });
      if (status)
        return response.status(200).json({ msg: "User Remove SuccesFully ", status: true });
      return response.status(404).json({ err: "Request Resource Not Found", status: false });
    }
  } catch (err) {
    console.log(err);
  }

}