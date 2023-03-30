import { DataTypes } from "sequelize";
import sequelize from "../database/getConnection.js";

const Category = sequelize.define("category", {
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


export default Category;