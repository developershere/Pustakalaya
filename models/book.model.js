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
        allowNull: false,
        validation: {
            isNumber: false
        }
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
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            isNumber: true
        }
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
        allowNull: false,
        default: true
    },
    cityId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    permission: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
    },
    pinCode: {
        type: DataTypes.INTEGER(6),
        allowNull: false,
        validate: {
            isNumber: true
        }
    },
    color: {
        type: DataTypes.STRING(20),
        allowNull: true,
        validate: {
            isNumber: false
        }
    }

});

export default Book;