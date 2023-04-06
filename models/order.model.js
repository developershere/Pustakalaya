import { DataTypes } from "sequelize";
import sequelize from "../database/getConnection.js";


const Order = sequelize.define("order" , {
     id : {
         type : DataTypes.INTEGER,
         primaryKey : true,
         autoIncrement : true
     },
     userId : {
         type : DataTypes.INTEGER,
         allowNull : false
     }
});


export default Order;