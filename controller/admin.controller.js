
import { validationResult } from "express-validator";
import Admin from "../models/admin.model.js";
import bcrypt from "bcryptjs";
import nodeMailer from "nodemailer";
import { request, response } from "express";
 export const signUp = async(request,response,next)=>{
  try{
    
   let error =await validationResult(request.body)
   if(!error)
     return response.status(400).json({err:"Bad Request",status:false});
   let saltkey = await bcrypt.genSalt(10);
    let encryptedpassword= await bcrypt.hash(request.body.password,saltkey);
    request.body.password=encryptedpassword;
  const admin = await Admin.create(request.body);
    return response.status(200).json({admin:admin,status:true});
  }catch(err){
    console.log(err);
    return response.status(500).json({err:"Internal Server Error",status:false});
  }
}


export const signIn =async(request,response,next)=>{
  try{
  let admin = await Admin.findOne({raw:true,where:{
    email:request.body.email
  }})
  if(admin){
     let status = await bcrypt.compare(request.body.password,admin.password)
     if(status)
       return response.status(200).json({message:"Sign In Success ",status:true});
      return response.status(400).json({err:"Bad Request",status:false})
  }
}catch(err){
  console.log(err);
  return response.status(500).json({err:"Internal Server Error",status:false});
}

}


export const sign= async(request,response,next)=>{
  console.log(request.body.email);
 

 

  let testAccount =await nodeMailer.createTestAccount();
  console.log(testAccount);
  let transporter=nodeMailer.createTransport({
    host:"smtp.ethereal.email",
    port:587,
    secure:false,
    auth: {
      user: 'rashad.medhurst28@ethereal.email',
      pass: 'Ebthjvbn6jG14FvT2b'
    }
  });

  let info = await transporter.sendMail({
    from: '"chetna Rathore 👻" <rathorechetna03@gmail.com>', // sender address
    to: "mausamlodhi326@gmail.com", // list of receivers
    subject: "Hello pooja", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  response.json(info);

}