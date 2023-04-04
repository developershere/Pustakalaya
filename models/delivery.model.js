import { DataTypes } from "sequelize";
import sequelize from "../database/getConnection.js";
const Dilevery = sequelize.define("dilevery" , {
     id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
     },
     contactPerson : {
        type : DataTypes.STRING(200),
        allowNull : false
     },
     contactNumber : {
        type : DataTypes.STRING(10),
        allowNull : false,
    },
    address : {
        type : DataTypes.STRING(500),
        allowNull : false
    },
    date: {
        type: DataTypes.STRING(50),
        defaultValue: new Date().toString().substring(4, 15).replaceAll(' ', '-')
    },
    billAmout : {
        type : DataTypes.INTEGER,

    },
    PaymentMode : {
          type : DataTypes.STRING(100),
      },
    status : {
     type : DataTypes.STRING(100),

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