
import { DataTypes } from "sequelize";
import sequelize from "../database/getConnection.js";
const Admin =sequelize.define("admin",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
       type:DataTypes.STRING,
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
        allowNull:false
    },

},{timestamps:false});

Admin.sync().then(()=>{
    console.log("Admin Table Created...")
}).catch(()=>{
    console.log(err);
})

export default Admin;