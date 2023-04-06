import { DataTypes } from 'sequelize';
import sequelize from '../database/getConnection.js';
const cartItems = sequelize.define("cartItem",{
    cartId : {
        type : DataTypes.INTEGER,
        allowNull:false
    },
    bookId : {
        type : DataTypes.INTEGER,
        allowNull:false
    }
});
sequelize.sync()
.then(()=>{
    console.log("Catrt-Items table created...");
})
.catch(err=>{
    console.log(err);
});
export default cartItems;