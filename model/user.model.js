import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../database/dbconfig.js";

const User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status : {
      type : DataTypes.BOOLEAN,
      defaultValue : true   
    }
});




export default User;