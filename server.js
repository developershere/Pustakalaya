import express from 'express';
import bodyParser from 'body-parser';
import AdminRoutes from "./routes/admin.route.js"
import UserRoutes from "./routes/user.route.js";
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
server.use("/admin",AdminRoutes);
server.use("/user",UserRoutes);
server.listen(3010,()=>console.log("Project Server Started..."));