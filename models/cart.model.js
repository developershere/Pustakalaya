import { DataTypes } from "sequelize";
import sequelize from "../database/dbconfig.js";

const Wishlist = sequelize.define("wishlist", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});



export default Wishlist;