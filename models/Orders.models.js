import { DataTypes } from "sequelize";
import sequelize from "../database/getConnection.js";
const Orders = sequelize.define("Orderes",{
    orderId :{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    bookId : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
})
export default Orders;