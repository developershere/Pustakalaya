import express from "express";
import { body } from "express-validator";
import { signUp ,signIn,sign, signOut, addCategory, deleteCategory, viewOrderHistory, viewOrderHistoryByuserId, userRemoveById} from "../controller/admin.controller.js";
const server = express.Router();
server.post("/signUp",body("name","please Enter Name").notEmpty(),body("email","Please Enter Email").isEmail(),body("contact","please Enter Conatct").isNumeric(),body("password","please Enter Password").notEmpty(),body("password","the Length of Password is Maximum five ").isLength({min:8,max:15}),signUp);

server.post("/signIn",signIn);
server.post("/category/add-category",addCategory);
server.post("/category/delete-category",deleteCategory);
server.get("/history/view-all",viewOrderHistory);
server.get("/history/view/:id",viewOrderHistoryByuserId);
server.get("/user/remove/:id",userRemoveById);
server.get("/signout",signOut)

export default server;