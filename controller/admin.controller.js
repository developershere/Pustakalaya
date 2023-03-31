
import { validationResult } from "express-validator";
import Admin from "../models/admin.model.js";
import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import Category from "../models/category.model.js";
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

export const addCategory = (request, response, next) => {
  console.log(request.body);
}

export const deleteCategory = async (request, response, next) => {
  console.log(request.body.id);
  try {
    let category = await Category.findByPk({ raw: true, where: { id: request.body.id } });
    if (!category)
      return response.status(404).json({ err: "Response Not Found", status: false });
    let status = Category.destroy({ raw: true, where: { id: request.body.id } });
    if (status)
      return response.status(200).json({ msg: "Category Remove SuccesFully ", status: true });
    return response.status(404).json({ err: "Request Resource Not Found", status: false });

  } catch (err) {
    console.log(err);
  }
}

export const viewOrderHistory = (request, response, next) => {
  History.findAll().then(result => {
    return response.status(200).json({ history: result, msg: "Your All History", status: true })
  }).catch(err => {
    return response.status(500).json({ err: "Internal Server Error", status: false });
  })
}


export const viewOrderHistoryByuserId = (request, response, next) => {
   
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

export const signOut = async (request, response, next) => {


}


