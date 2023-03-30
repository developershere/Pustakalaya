import { Sequelize } from "sequelize";

const sequelize = new Sequelize("pustakalaya" , "root" , "Server.12345" ,{
     host : "localhost",
     dialect : "mysql"
});

sequelize.authenticate().then(()=>{
     console.log("database conected");
}).catch(err=>{
     console.log(err);
});

export default sequelize;


