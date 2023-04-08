import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import {User} from "../database/association.js";
import  jwt  from "jsonwebtoken";
import email  from "../services/mail.js";
import { response } from "express";
export const signup = async (request, response, next) => {
    try {
        const errors = await validationResult(request);
        if (!errors.isEmpty())
          return response.status(400).json({ message: "bed request ", masseges: errors.array() })
        let soltkey = await bcrypt.genSalt(15);
        let encryptedPassword = await bcrypt.hash(request.body.password, soltkey);
        request.body.password = encryptedPassword;
        let x = Math.floor((Math.random() * 9999) + 1000);
        var time = new Date().getMinutes();
        // const otp = email(request.body.email,"Mausam lodhi",request.body.name,470115);
        if(new Date().getMinutes()<=time+5)
        {
          if(request.body.otp==470115)
          {
            const user = await User.create(request.body);
            return response.status(200).json({ user: user, status: true });
          }
          else
            return response.status(400).json({message : "OTP is mismetched...",status:false});
        }
        else
          return response.status(400).json({message : "OTP is Expires",status:false});
        console.log(otp);
    }
    catch (err) {
      console.log(err);
        return response.status(500).json({ message: "Internal server Error",status:false});
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
         return response.status(200).json({ token : token ,message : "login succsefull",status:true});
        }
         return response.status(400).json({ message: "bed request",status:false});
    }
     else
      return response.status(400).json({message : "invalid email and password",status:false})
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
export const getUserById = async (request,response,next)=>{
    try{
        let user = await User.findByPk(request.params.id);
        return user?response.status(200).json({Details : {...user.dataValues,password:undefined},status:true}):response.status(400).json({Message : "Bad request",status : false});
    }
    catch(err)
    {
      console.log(err);
      return response.status(500).json({Message : "Internal Server Error...",status : false});
    }
}
export const updateUserById = async(req, res) => {
  const userId = req.params.id;
  const { name, email, contact, photo } = req.body;
  try {
      const [updatedRowsCount, updatedRows] = await User.update({ name, email, contact, photo }, { where: { id: userId } });
      if (updatedRowsCount) {
          res.status(200).json({ message: 'User updated successfully' });
      } else {
          res.status(404).json({ message: 'User not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}
export const forgotPassword = async(req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }


        const resetCode = uuid();
        await user.update({ resetCode });


        const resetLink = `https://example.com/reset-password?code=${resetCode}`;
        sendPasswordResetEmail(email, resetLink); 

        res.json({ message: 'Password reset initiated. Check your email for further instructions.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

export const resetPassword = async(req, res) => {
    const { code, password } = req.body;

    try {
        const user = await User.findOne({ where: { resetCode: code } });

        if (!user) {
            return res.status(404).json({ message: 'Invalid or expired reset code' });
        }
        await user.update({ password, resetCode: null });
        res.json({ message: 'Password reset successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};