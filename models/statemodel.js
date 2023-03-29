import { DataTypes } from "sequelize";
import sequelize from "../database/getConnection.js";

const State = sequelize.define("state", {
    stateName: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    }
}, { timestamps: false });



export default State;

sequelize.sync().then((result) => { console.log("State Table Created") }).catch((err) => {console.log(err);})