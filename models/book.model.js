import { DataTypes } from "sequelize";
import sequelize from "../database/dbconfig.js";

const Book = sequelize.define("book", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumber: true
        }
    },
    categoryID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edition: {
        type: DataTypes.STRING,
        allowNull: true
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publication_date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: true
    },
    cityId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pin_code: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, { timestamps: false });

Book.sync().then(() => {
    console.log("Book Table Created...")
}).catch(() => {
    console.log(err);
})

export default Book;