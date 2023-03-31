import express from 'express';
import bodyParser from 'body-parser';
import AdminRoutes from "./routes/admin.route.js"
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
server.use("/admin",AdminRoutes);
server.use("/user",UserRoutes);
server.use("/",RouteRoutes);
server.listen(3000,()=>console.log("Project Server Started..."));