import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../database/getConnection.js";

const User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,

    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    contact: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {

        }

    },
    photo: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});


export default User;