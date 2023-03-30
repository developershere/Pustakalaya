import express from 'express';
import bodyParser from 'body-parser';
import UserRoutes from "./routes/user.route.js"

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/admin",AdminRoutes);
app.use("/user",UserRoutes);
app.use("/",RouteRoutes);
app.listen(3000,()=>console.log("Project Server Started..."));