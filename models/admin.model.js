<<<<<<< HEAD
import { DataTypes } from "sequelize";
import sequelize from "../database/dbconfig.js";

const Admin = sequelize.define("admin", {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
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
        allowNull: false
    },
    contact: {
        type: DataTypes.STRING(10),
        allowNull: false
    },

});

=======
import sequelize, { DataTypes } from "sequelize";
const Admin = sequelize.define('admin',{
    name : {
        type : DataTypes.STRING,
        allowNull : false
    }
})
>>>>>>> master
export default Admin;