import { DataTypes } from "sequelize";
import sequelize from "../database/dbconfig.js";


 const Cart = sequelize.define("cart",  {
     id : {
         type : DataTypes.INTEGER,
         primaryKey : true ,
         autoIncrement : true
     },
   userId : {
         type : DataTypes.INTEGER,
         allowNull : false
     },
     bookId : {
         type : DataTypes.INTEGER,
         allowNull : false
     }

 })

 export default Cart;