import express from "express";
import { body } from "express-validator";
import { signUp ,signIn,addCategory,deleteCategory,viewOrderHistory,viewOrderHistoryByuserId, userRemoveById,signOut} from "../controller/admin.controller.js";
const router = express.Router();
router.post("/signUp",body("name","please Enter Name").notEmpty(),body("email","Please Enter Email").isEmail(),body("contact","please Enter Conatct").isNumeric(),body("password","please Enter Password").notEmpty(),body("password","the Length of Password is Maximum Eight ").isLength({min:8,max:25}),signUp);

router.post("/signIn",signIn);

router.post("/category/addCategory",addCategory);
router.post("/category/deleteCategory",deleteCategory);
router.get("/history/viewAll",viewOrderHistory);
router.get("/history/view/:id",viewOrderHistoryByuserId);
router.get("/user/remove/:id",userRemoveById);
router.get("/signOut",signOut)


export default router;