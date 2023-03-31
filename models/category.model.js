import { DataTypes } from "sequelize";
import sequelize from "../database/dbconfig.js";

const Category = sequelize.define("category", {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});
export default Category;