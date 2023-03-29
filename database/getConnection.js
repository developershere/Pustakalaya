import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('pustakalaya','root','Mausam&123',{
    host : 'localhost',
    dialect : 'mysql'
});
database.authenticate()
.then(()=>console.log("Database Connected..."))
.catch(err=>console.log("Database Error : "+err));
    export default sequelize;