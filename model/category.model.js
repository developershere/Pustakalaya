import { DataTypes } from "sequelize";
import sequelize from "../database/dbconfig.js";

const Category = sequelize.define("category", {
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });


sequelize.sync().then(() => {
    console.log("category table is created");
}).catch(err => {
    console.log(err);
});

export default Category;