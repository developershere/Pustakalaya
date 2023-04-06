import { validationResult } from "express-validator";
import Admin from "../models/admin.model.js";
import bcrypt from "bcryptjs";
export const signUp = async (request, response, next) => {
  try {

    let error = await validationResult(request.body)
    if (!error)
      return response.status(400).json({ err: "Bad Request", status: false });
    let saltkey = await bcrypt.genSalt(7);
    let encryptedpassword = await bcrypt.hash(request.body.password, saltkey);
    request.body.password = encryptedpassword;
    const admin = await Admin.create(request.body);
    return response.status(200).json({ admin: admin, status: true });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ err: "Internal Server Error", status: false });
  }
}


export const signIn = async (request, response, next) => {
  try {
    let admin = await Admin.findOne({
      raw: true, where: { email: request.body.email }
    });
    if (admin) {
      let status = await bcrypt.compare(request.body.password, admin.password)
      if (status)
        return response.status(200).json({ message: "Sign In Success ", status: true });
      return response.status(400).json({ err: "Bad Request", status: false })
    }
  } catch (err) {
    console.log(err);
    return response.status(500).json({ err: "Internal Server Error", status: false });
  }

}