import { DataTypes } from "sequelize";
import sequelize from "../database/getConnection.js";

const City = sequelize.define("city", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


export default City;


