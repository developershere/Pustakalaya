import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../database/getConnection.js";

const User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(75),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(35),
        allowNull: false,
    },
    contact: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique:true

    },
    photo: {
        type: DataTypes.STRING(1500),
        allowNull: false,
    }
});





export default User;
