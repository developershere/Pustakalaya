import { DataTypes } from "sequelize";
import sequelize from "../database/getConnection.js";

const Book = sequelize.define("book", {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,

    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    author: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoryID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    language: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    edition: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    photos: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    publicationDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        default: true
    },
    cityId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    permission: {
        type: DataTypes.BOOLEAN,
          default: false
    },
    pinCode: {
        type: DataTypes.INTEGER(6),
        allowNull: false
    },
    color: {
        type: DataTypes.STRING(20),
        allowNull: true
    }

});

export default Book;