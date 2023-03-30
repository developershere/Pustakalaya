import mysql from "mysql2";
import { Sequelize } from "sequelize";
const sequelize = new Sequelize("pustakalaya","root","chetna22rathore",{
    host:"localhost",
    dialect:"mysql"
});


sequelize.authenticate().then(()=>{
    console.log("DataBase Connected");
}).catch(()=>{
    console.log("DataBase Not Connected...")
})

export default sequelize;