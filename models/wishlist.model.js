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

}, { timestamps: false });

Wishlist.sync().then(() => {
    console.log("Wishlist Table Created...")
}).catch(() => {
    console.log(err);

});

export default Wishlist;