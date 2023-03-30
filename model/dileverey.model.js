import { DataTypes } from "sequelize";
import sequelize from "../database/dbconfig.js";
const Dilevery = sequelize.define("dilevery" , {
     id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
     },
     contactPerson : {
        type : DataTypes.STRING,
        allowNull : false
     },
     contactNumber : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    address : {
        type : DataTypes.STRING,
        allowNull : false
    },
    date: {
        type: DataTypes.STRING,
        defaultValue: new Date().toString().substring(4, 15).replaceAll(' ', '-')
    },
    billAmout : {
        type : DataTypes.INTEGER,

    },
    PaymentMode : {
          type : DataTypes.STRING,
      },
    status : {
     type : DataTypes.STRING,

    },
    userId : {
    type : DataTypes.INTEGER,
     allowNull : false,
    },
   orderId : {
    type : DataTypes.INTEGER,
    allowNull : false,
   }
    
})

export default Dilevery;