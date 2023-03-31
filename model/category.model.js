import { DataTypes } from "sequelize";
import sequelize from "../database/dbconfig.js";

const Category = sequelize.define("category", {
    categoryName: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
});



export default Category;