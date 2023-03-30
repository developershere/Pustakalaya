import { DataTypes } from "sequelize";
import sequelize from "../database/dbconfig.js";

const History = sequelize.define("history",{
     id : {
         type : DataTypes.INTEGER,
         primaryKey : true,
         autoIncrement : true
     },
     userId : {
           type : DataTypes.INTEGER,
           allowNull : false
     },
     bookId : {
           type : DataTypes.INTEGER,
           allowNull : false
     },
     price : {
          type : DataTypes.INTEGER
     },
     userIdSeller : {
           type : DataTypes.INTEGER,
           allowNull : false
     },
     date: {
     type: DataTypes.STRING,
     defaultValue: new Date().toString().substring(4, 15).replaceAll(' ', '-')
     },
     bookStatus : {
     type : DataTypes.BOOLEAN
     } 
 });

 export default History