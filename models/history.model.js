import { DataTypes } from "sequelize";
import sequelize from "../database/dbconfig.js";

const History = sequelize.define("history", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    book_status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: true
    },
    sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }


}, { timestamps: false });

History.sync().then(() => {
    console.log("History Table Created...")
}).catch(() => {
    console.log(err);
})

export default History;