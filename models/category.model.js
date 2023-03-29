import { DataTypes } from "sequelize";
import sequelize from "../database/dbconfig.js";

const Category = sequelize.define("category", {
    categoryname: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });

Category.sync().then(() => {
    console.log("Category Table Created...")
}).catch(() => {
    console.log(err);
})

export default Category;