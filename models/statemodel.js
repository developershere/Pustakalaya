import { DataTypes } from "sequelize";
import sequelize from "../database/getConnection.js";

const State = sequelize.define("state", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
       
    }
});



export default State;

