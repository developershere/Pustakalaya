import { DataTypes } from "sequelize";
import sequelize from "../database/getConnection.js";

const Category = sequelize.define("category", {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});
sequelize.sync().then(result => {
    console.log("Categories created....");
}).catch(err => {
    console.log(err);
})
export default Category;