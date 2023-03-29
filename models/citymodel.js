import { DataTypes } from "sequelize";
import sequelize from "../database/getConnection.js";

const City = sequelize.define("city", {
    cityName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });


export default City;

sequelize.sync().then((result) => {
    console.log("City Table Created");
}).catch((err) => { console.log(err) });
