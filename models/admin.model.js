
import { DataTypes } from "sequelize";
import sequelize from "../database/getConnection.js";
const Admin =sequelize.define("admin",{
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    email:{
       type:DataTypes.STRING(70),
       allowNull:false,
       unique:true,
       validate:{
        isEmail:true
       }
    },
    password:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    contact:{
        type:DataTypes.STRING(10),
        allowNull:false,
        unique:true
    },

});



export default Admin;