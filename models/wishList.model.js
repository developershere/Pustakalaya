import { DataTypes } from "sequelize";
import sequelize from "../database/getConnection.js";

const WishList = sequelize.define("wishList",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    }
})

export default WishList;

sequelize.sync().then((result)=>{
    console.log("Wishlist Table Created");
}).catch((err)=>{
    console.log(err);
})
