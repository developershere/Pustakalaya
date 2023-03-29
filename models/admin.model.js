import sequelize, { DataTypes } from "sequelize";
const Admin = sequelize.define('admin',{
    name : {
        type : DataTypes.STRING,
        allowNull : false
    }
})
export default Admin;