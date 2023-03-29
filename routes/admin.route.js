import express from "express";
import { body } from "express-validator";
import { signUp ,signIn,sign} from "../controller/admin.controller.js";
const server = express.Router();
router.post("/signUp",body("name","please Enter Name").notEmpty(),body("email","Please Enter Email").isEmail(),body("contact","please Enter Conatct").isNumeric(),body("password","please Enter Password").notEmpty(),body("password","the Length of Password is Maximum five ").isLength({min:5}),signUp);

router.post("/signIn",signIn);
router.post("/sign",sign);

export default server;