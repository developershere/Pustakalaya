import express from "express";
import { body } from "express-validator";
const router = express.Router();
import { signup, signin} from "../controller/user.controller.js";

router.post("/signUp", body("name", "this field can't be empty").notEmpty(),
    body("email", "this field can't be empty").notEmpty(),
    body("password", "this field can't be empty").notEmpty(),
    body("contact", "this field can't be empty").notEmpty(),
    body("photo", "this field can't be empty").notEmpty(),
    body("contact").isNumeric(),
    body("contact").isLength({ min: 6 }),
    body("email").isEmail(),
   signup
);
   
router.post("/signin" , signin)

export default router ;