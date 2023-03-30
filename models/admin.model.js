
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
        type:DataTypes.STRING,
        allowNull:false,
    },
    contact:{
        type:DataTypes.STRING(10),
        allowNull:false,
        unique:true
    },

});

sequelize.sync().then(result=>{console.log(result)}).catch(err=>{console.log(err)});

export default Admin;